import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    stars: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Submission = mongoose.model("Submission", submissionSchema);
export default Submission;
