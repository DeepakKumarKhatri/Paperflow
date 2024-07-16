import mongoose from "mongoose";

const resourceSolutionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    instructorName: {
      type: String,
      default: "",
    },
    semester: {
      type: String,
      default: "",
    },
    uploadedBy: {
      type: String,
      default: "",
    },
    accessUrl: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    documentType: {
      type: String,
      default: "",
      enum: ["document", "other"],
    },
    instructorName: {
      type: String,
      default: "",
    },
    semester: {
      type: String,
      default: "",
    },
    uploadedBy: {
      type: String,
      default: "",
    },
    accessUrl: {
      type: String,
      default: "",
    },
    resourceSolutions: [resourceSolutionSchema],
  },
  {
    timestamps: true,
  }
);

const Resource = mongoose.model("Resource", resourceSchema);

export default Resource;
