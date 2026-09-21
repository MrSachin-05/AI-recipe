const mongoose = require("mongoose");
const PantryItem = require("../database/pantryItem.database");
const User = require("../database/user.database");
const { isDbConnected } = require("../config/db");

const memoryPantry = new Map();

const unwrapData = (body) => (body && body.data ? body.data : body || {});

// Create a single pantry item
exports.createPantryItem = async (req, res) => {
  try {
    const payload = unwrapData(req.body);
    const { name, quantity, imageUrl } = payload;
    let owner = payload.owner;

    if (!name) {
      return res.status(400).json({ success: false, message: "Ingredient name is required" });
    }

    let resolvedOwner = null;
    let clerkId = null;

    if (owner) {
      if (typeof owner === "object" && owner.id) {
        owner = owner.id;
      }
      if (typeof owner === "string") {
        if (owner.startsWith("user_")) {
          clerkId = owner;
          if (isDbConnected()) {
            const userDoc = await User.findOne({ clerkId });
            if (userDoc) resolvedOwner = userDoc._id;
          }
        } else if (mongoose.Types.ObjectId.isValid(owner)) {
          resolvedOwner = owner;
        }
      }
    }

    if (!isDbConnected()) {
      const generatedId = new mongoose.Types.ObjectId().toString();
      const mockItem = {
        id: generatedId,
        _id: generatedId,
        name: name.trim(),
        quantity: (quantity || "").trim(),
        imageUrl: imageUrl || "",
        owner: resolvedOwner || owner || undefined,
        clerkId: clerkId || undefined,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      memoryPantry.set(mockItem.id, mockItem);
      return res.status(201).json({ success: true, data: mockItem });
    }

    const item = await PantryItem.create({
      name: name.trim(),
      quantity: (quantity || "").trim(),
      imageUrl: imageUrl || "",
      owner: resolvedOwner,
      clerkId: clerkId || undefined,
    });

    return res.status(201).json({
      success: true,
      data: item,
    });
  } catch (error) {
    const payload = unwrapData(req.body);
    const generatedId = new mongoose.Types.ObjectId().toString();
    const fallbackItem = {
      id: generatedId,
      _id: generatedId,
      name: (payload.name || "").trim(),
      quantity: (payload.quantity || "").trim(),
      imageUrl: payload.imageUrl || "",
      owner: payload.owner,
      createdAt: new Date().toISOString(),
    };
    memoryPantry.set(fallbackItem.id, fallbackItem);
    return res.status(201).json({ success: true, data: fallbackItem });
  }
};

// Batch create pantry items
exports.batchCreatePantryItems = async (req, res) => {
  try {
    const payload = unwrapData(req.body);
    const items = Array.isArray(payload) ? payload : payload.items || [];
    let owner = payload.owner || req.query.owner;

    if (!items.length) {
      return res.status(400).json({ success: false, message: "No ingredients provided" });
    }

    let resolvedOwner = null;
    let clerkId = null;

    if (owner) {
      if (typeof owner === "string" && owner.startsWith("user_")) {
        clerkId = owner;
        if (isDbConnected()) {
          const userDoc = await User.findOne({ clerkId });
          if (userDoc) resolvedOwner = userDoc._id;
        }
      } else if (mongoose.Types.ObjectId.isValid(owner)) {
        resolvedOwner = owner;
      }
    }

    if (!isDbConnected()) {
      const created = items.map((it) => {
        const id = new mongoose.Types.ObjectId().toString();
        const doc = {
          id,
          _id: id,
          name: (it.name || it.item || "").trim(),
          quantity: (it.quantity || it.amount || "").trim(),
          imageUrl: it.imageUrl || "",
          owner: resolvedOwner || owner || undefined,
          clerkId: clerkId || undefined,
          createdAt: new Date().toISOString(),
        };
        memoryPantry.set(id, doc);
        return doc;
      }).filter((it) => Boolean(it.name));

      return res.status(201).json({
        success: true,
        data: created,
        count: created.length,
      });
    }

    const docs = items.map((it) => ({
      name: (it.name || it.item || "").trim(),
      quantity: (it.quantity || it.amount || "").trim(),
      imageUrl: it.imageUrl || "",
      owner: resolvedOwner,
      clerkId: clerkId || undefined,
    })).filter((it) => Boolean(it.name));

    const createdItems = await PantryItem.insertMany(docs);

    return res.status(201).json({
      success: true,
      data: createdItems,
      count: createdItems.length,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// Get pantry items
exports.getPantryItems = async (req, res) => {
  try {
    const ownerFilter =
      req.query?.["filters[owner][id][$eq]"] ||
      req.query?.["filters[owner][$eq]"] ||
      req.query?.owner;

    if (!isDbConnected()) {
      let items = Array.from(memoryPantry.values());
      if (ownerFilter) {
        items = items.filter(
          (it) =>
            it.owner === ownerFilter ||
            it.clerkId === ownerFilter ||
            it.owner?.id === ownerFilter
        );
      }
      return res.status(200).json({ success: true, data: items, count: items.length });
    }

    const query = {};
    if (ownerFilter) {
      if (ownerFilter.startsWith("user_")) {
        const userDoc = await User.findOne({ clerkId: ownerFilter });
        if (userDoc) {
          query.$or = [{ owner: userDoc._id }, { clerkId: ownerFilter }];
        } else {
          query.clerkId = ownerFilter;
        }
      } else if (mongoose.Types.ObjectId.isValid(ownerFilter)) {
        query.owner = ownerFilter;
      }
    }

    const items = await PantryItem.find(query).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: items,
      count: items.length,
    });
  } catch (error) {
    let items = Array.from(memoryPantry.values());
    return res.status(200).json({ success: true, data: items, count: items.length });
  }
};

// Get single pantry item
exports.getPantryItemById = async (req, res) => {
  try {
    if (!isDbConnected()) {
      const item = memoryPantry.get(req.params.id);
      if (!item) return res.status(404).json({ success: false, message: "Pantry item not found" });
      return res.status(200).json({ success: true, data: item });
    }

    const item = await PantryItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Pantry item not found" });
    }
    return res.status(200).json({ success: true, data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update pantry item
exports.updatePantryItem = async (req, res) => {
  try {
    const payload = unwrapData(req.body);

    if (!isDbConnected()) {
      const item = memoryPantry.get(req.params.id);
      if (!item) return res.status(404).json({ success: false, message: "Pantry item not found" });
      Object.assign(item, payload);
      return res.status(200).json({ success: true, data: item });
    }

    const item = await PantryItem.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({ success: false, message: "Pantry item not found" });
    }

    return res.status(200).json({ success: true, data: item });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// Delete pantry item
exports.deletePantryItem = async (req, res) => {
  try {
    if (!isDbConnected()) {
      const item = memoryPantry.get(req.params.id);
      if (item) memoryPantry.delete(req.params.id);
      return res.status(200).json({
        success: true,
        data: item || { id: req.params.id },
        message: "Pantry item removed successfully",
      });
    }

    const item = await PantryItem.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Pantry item not found" });
    }
    return res.status(200).json({
      success: true,
      data: item,
      message: "Pantry item removed successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
