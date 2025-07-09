import mongoose from "mongoose";

const categorySchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },    
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},
{
  timestamps: true,
})

export const Category = mongoose.model("Category", categorySchema);