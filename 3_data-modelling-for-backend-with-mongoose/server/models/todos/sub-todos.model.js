import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    todo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const SubToDo = mongoose.model("SubToDo", subTodoSchema);

export default SubToDo;
