import { auth, currentUser } from "@clerk/nextjs/server";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:5000";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || "";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const { has } = await auth();
  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  // Build a safe authenticated fallback user from Clerk data
  const fallbackUser = {
    id: user.id,
    clerkId: user.id,
    clerkid: user.id,
    username:
      user.username ||
      user.emailAddresses?.[0]?.emailAddress?.split("@")[0] ||
      "User",
    email: user.emailAddresses?.[0]?.emailAddress || "",
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    imageUrl: user.imageUrl || "",
    subscriptionTier,
  };

  try {
    const normalizeEntity = (entity) => {
      if (!entity) return null;
      if (entity.attributes) {
        return { id: entity.id, ...entity.attributes };
      }
      return entity;
    };

    const authHeaders = {
      ...(STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {}),
    };

    // 1. Check if user exists in backend
    const existingUserResponse = await fetch(
      `${STRAPI_URL}/api/users?filters[clerkid][$eq]=${user.id}`,
      {
        headers: authHeaders,
        cache: "no-store",
      },
    );

    if (existingUserResponse.ok) {
      const existingUserData = await existingUserResponse.json();
      const existingUserEntity = Array.isArray(existingUserData)
        ? existingUserData[0]
        : existingUserData?.data?.[0] ?? existingUserData?.data ?? null;

      const existingUser = normalizeEntity(existingUserEntity);

      if (existingUser) {
        if (existingUser.subscriptionTier !== subscriptionTier) {
          await fetch(`${STRAPI_URL}/api/users/${existingUser.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              ...authHeaders,
            },
            body: JSON.stringify({ data: { subscriptionTier }, subscriptionTier }),
          }).catch(() => {});
        }
        return { ...fallbackUser, ...existingUser, subscriptionTier };
      }
    }

    // 2. Fetch or mock role
    let roleId = 1;
    try {
      const rolesResponse = await fetch(
        `${STRAPI_URL}/api/users-permissions/roles`,
        { headers: authHeaders },
      );
      if (rolesResponse.ok) {
        const rolesData = await rolesResponse.json();
        const roles = rolesData?.data ?? rolesData?.roles ?? [];
        const authenticatedRole = Array.isArray(roles)
          ? roles.find((r) => r?.type === "authenticated")
          : null;
        if (authenticatedRole) {
          roleId = authenticatedRole.id;
        }
      }
    } catch {
      // Role fetch is non-critical for manual backend
    }

    // 3. Create new user in backend
    const userData = {
      username:
        user.username || user.emailAddresses[0].emailAddress.split("@")[0],
      email: user.emailAddresses[0].emailAddress,
      password: `clerk_managed_${user.id}_${Date.now()}`,
      confirmed: true,
      blocked: false,
      role: roleId,
      clerkid: user.id,
      clerkId: user.id,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      imageUrl: user.imageUrl || "",
      subscriptionTier,
    };

    const newUserResponse = await fetch(`${STRAPI_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders,
      },
      body: JSON.stringify({ data: userData, ...userData }),
    });

    if (newUserResponse.ok) {
      const newUserResponseData = await newUserResponse.json();
      const newUserEntity =
        newUserResponseData?.data ?? newUserResponseData;
      const normalized = normalizeEntity(newUserEntity);
      return { ...fallbackUser, ...(normalized || {}) };
    }

    // If backend responded with non-ok, gracefully return authenticated user session
    return fallbackUser;
  } catch (error) {
    // Graceful fallback to prevent Header, RootLayout, or dashboard from breaking
    console.warn(
      "Backend sync temporarily unavailable, using verified Clerk session:",
      error.message,
    );
    return fallbackUser;
  }
};
