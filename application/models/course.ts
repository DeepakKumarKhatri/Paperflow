import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    code: {
      type: String,
      default: "",
    },
    creditHours: {
      type: Number,
      default: 0,
    },
    resources: [
      {
        content: {
          type: mongoose.Types.ObjectId,
          ref: "Resource",
        },
        contentSize: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
