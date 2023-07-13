const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    // wo befindet sich Comment
    pageId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // wer hat Comment gelassen
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentId: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    created_at: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = model("Answer", schema);
