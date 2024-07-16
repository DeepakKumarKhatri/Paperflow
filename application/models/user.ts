import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subType: {
      type: String,
      default: "freemium",
    },
    expiresIn: {
      type: String,
      default: "",
    },
    amountPaid: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "dead"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const systemAccessSchema = new mongoose.Schema(
  {
    userRole: {
      type: String,
      default: "",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    profileCompleted: {
      type: Boolean,
      default: false,
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    subscriptions: [subscriptionSchema],
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please add a full name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: [false, "Please add a phone number"],
      default: "",
    },
    dob: {
      type: Number,
      required: [false, "Please add your dob"],
      default: "",
    },
    profileImage: {
      type: String,
      default: "",
    },
    systemAccess: systemAccessSchema,
    courses: [
      {
        course: {
          type: mongoose.Types.ObjectId,
          ref: "Course",
        },
      },
    ],
    bookmarks: [
      {
        bookmark: {
          type: mongoose.Types.ObjectId,
          ref: "Resource",
        },
      },
    ],
    contributions: [
      {
        contribution: {
          type: mongoose.Types.ObjectId,
          ref: "Resource",
        },
        status: {
          type: String,
          enum: ["accepted", "rejected", "pending"],
          default: "pending",
        },
      },
    ],
    chats: [
      {
        chat: {
          type: mongoose.Types.ObjectId,
          ref: "Chat",
        },
      },
    ],
    submissions: [
      {
        submission: {
          type: mongoose.Types.ObjectId,
          ref: "Submission",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
