const mongoose = require("mongoose");
const User = require("../database/user.database");
const { isDbConnected } = require("../config/db");

// In-memory user store for instant response when database is offline (keyed by user.id)
const memoryUsers = new Map();

// Helper to extract body (handles both { data: { ... } } and flat { ... })
const unwrapData = (body) => (body && body.data ? body.data : body || {});

// Find or list users (handles Clerk sync & filter queries)
exports.getUsers = async (req, res) => {
  try {
    const clerkIdFilter =
      req.query?.["filters[clerkid][$eq]"] ||
      req.query?.["filters[clerkId][$eq]"] ||
      req.query?.clerkId ||
      req.query?.clerkid;

    const emailFilter =
      (req.query?.["filters[email][$eq]"] || req.query?.email)?.toLowerCase().trim();

    // If DB is offline, serve from in-memory store
    if (!isDbConnected()) {
      const allUsers = Array.from(memoryUsers.values());
      const filtered = allUsers.filter((u) => {
        if (clerkIdFilter && u.clerkId !== clerkIdFilter && u.clerkid !== clerkIdFilter) return false;
        if (emailFilter && u.email !== emailFilter) return false;
        return true;
      });
      return res.status(200).json(filtered);
    }

    const query = {};
    if (clerkIdFilter) query.clerkId = clerkIdFilter;
    if (emailFilter) query.email = emailFilter;

    const users = await User.find(query).sort({ createdAt: -1 });
    return res.status(200).json(users);
  } catch (error) {
    // If DB error (e.g. buffering timeout), fallback to in-memory gracefully
    const clerkIdFilter =
      req.query?.["filters[clerkid][$eq]"] ||
      req.query?.["filters[clerkId][$eq]"] ||
      req.query?.clerkId ||
      req.query?.clerkid;

    const allUsers = Array.from(memoryUsers.values());
    const filtered = clerkIdFilter
      ? allUsers.filter((u) => u.clerkId === clerkIdFilter || u.clerkid === clerkIdFilter)
      : allUsers;

    return res.status(200).json(filtered);
  }
};

// Get single user by ID or clerkId
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isDbConnected()) {
      const user =
        memoryUsers.get(id) ||
        Array.from(memoryUsers.values()).find((u) => u.clerkId === id || u.id === id);

      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      return res.status(200).json(user);
    }

    let user;
    if (id.startsWith("user_")) {
      user = await User.findOne({ clerkId: id });
    } else if (mongoose.Types.ObjectId.isValid(id)) {
      user = await User.findById(id);
    }

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Create or sync user
exports.createUser = async (req, res) => {
  try {
    const payload = unwrapData(req.body);
    const clerkId = payload.clerkid || payload.clerkId;
    const email = payload.email?.toLowerCase().trim();

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    // If DB is offline, store in-memory and return immediately
    if (!isDbConnected()) {
      let existing = Array.from(memoryUsers.values()).find(
        (u) => (clerkId && (u.clerkId === clerkId || u.clerkid === clerkId)) || u.email === email
      );

      if (existing) {
        if (payload.subscriptionTier) existing.subscriptionTier = payload.subscriptionTier;
        if (payload.firstName) existing.firstName = payload.firstName;
        if (payload.lastName) existing.lastName = payload.lastName;
        if (payload.imageUrl) existing.imageUrl = payload.imageUrl;
        return res.status(200).json(existing);
      }

      const generatedId = new mongoose.Types.ObjectId().toString();
      const mockUser = {
        id: generatedId,
        _id: generatedId,
        clerkId: clerkId || undefined,
        clerkid: clerkId || undefined,
        username: payload.username || email.split("@")[0],
        email,
        firstName: payload.firstName || "",
        lastName: payload.lastName || "",
        imageUrl: payload.imageUrl || "",
        subscriptionTier: payload.subscriptionTier || "free",
        verified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      memoryUsers.set(mockUser.id, mockUser);
      return res.status(201).json(mockUser);
    }

    // Check if user already exists in MongoDB
    let user = await User.findOne({
      $or: [...(clerkId ? [{ clerkId }] : []), { email }],
    });

    if (user) {
      if (clerkId && !user.clerkId) user.clerkId = clerkId;
      if (payload.firstName) user.firstName = payload.firstName;
      if (payload.lastName) user.lastName = payload.lastName;
      if (payload.imageUrl) user.imageUrl = payload.imageUrl;
      if (payload.subscriptionTier) user.subscriptionTier = payload.subscriptionTier;
      await user.save();
      return res.status(200).json(user);
    }

    // Create new user in MongoDB
    user = await User.create({
      clerkId: clerkId || undefined,
      username: payload.username || email.split("@")[0],
      email,
      firstName: payload.firstName || "",
      lastName: payload.lastName || "",
      imageUrl: payload.imageUrl || "",
      subscriptionTier: payload.subscriptionTier || "free",
      password: payload.password || undefined,
      verified: true,
    });

    return res.status(201).json(user);
  } catch (error) {
    // If DB fails, store and return in memory
    const payload = unwrapData(req.body);
    const generatedId = new mongoose.Types.ObjectId().toString();
    const fallbackUser = {
      id: generatedId,
      _id: generatedId,
      clerkId: payload.clerkid || payload.clerkId,
      clerkid: payload.clerkid || payload.clerkId,
      email: payload.email,
      username: payload.username || payload.email?.split("@")[0] || "User",
      firstName: payload.firstName || "",
      lastName: payload.lastName || "",
      imageUrl: payload.imageUrl || "",
      subscriptionTier: payload.subscriptionTier || "free",
      verified: true,
    };
    memoryUsers.set(fallbackUser.id, fallbackUser);
    return res.status(201).json(fallbackUser);
  }
};

// Update user (e.g., subscription tier)
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = unwrapData(req.body);

    if (!isDbConnected()) {
      let user =
        memoryUsers.get(id) ||
        Array.from(memoryUsers.values()).find((u) => u.clerkId === id || u.id === id);

      if (user) {
        Object.assign(user, payload);
        return res.status(200).json(user);
      }
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const user = await User.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// Strapi compatibility mock for /api/users-permissions/roles
exports.getRolesMock = async (req, res) => {
  return res.status(200).json({
    data: [
      {
        id: 1,
        name: "Authenticated",
        description: "Default role for authenticated users",
        type: "authenticated",
      },
      {
        id: 2,
        name: "Public",
        description: "Default role for public users",
        type: "public",
      },
    ],
    roles: [
      {
        id: 1,
        name: "Authenticated",
        type: "authenticated",
      },
    ],
  });
};
