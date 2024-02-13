import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Content",
      required: true,
    }],
    isSeries: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model("List", listSchema);
export default List;
