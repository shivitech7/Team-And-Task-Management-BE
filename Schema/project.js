import mongoose from "mongoose";

const collaboratorSchema = new mongoose.Schema([
  {
    role: Number,
  },
]);

const projectSchema = mongoose.Schema({
  name: { type: String },
  img: String,
  description: String,
  privacy: Boolean,
  owners: Array,
  datetime: { type: Number, default:  new Date(new Date().toUTCString()) },
  status: {type:Number, default: 1},
  collaborators: [collaboratorSchema],
  category: String
});

const createProjectSchema = new mongoose.model("Projects", projectSchema);

export default createProjectSchema;
