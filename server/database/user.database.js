const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
      index: true,
    },
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    firstName: {
      type: String,
      default: "",
      trim: true,
    },
    lastName: {
      type: String,
      default: "",
      trim: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    subscriptionTier: {
      type: String,
      enum: ["free", "pro"],
      default: "free",
    },
    password: {
      type: String,
      required: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret.__v;
        if (ret.password) delete ret.password;
        return ret;
      },
    },
  }
);

// Virtuals for relations (matches db-connections.png)
userSchema.virtual("pantryItems", {
  ref: "PantryItem",
  localField: "_id",
  foreignField: "owner",
});

userSchema.virtual("savedRecipes", {
  ref: "SavedRecipe",
  localField: "_id",
  foreignField: "user",
});

userSchema.virtual("recipes", {
  ref: "Recipe",
  localField: "_id",
  foreignField: "author",
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;