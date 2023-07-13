const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
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
    price: {
      type: Number,
    },
    section: {
      type: String,
      required: true,
    },
    subjects: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
  },
  {
    timestamps: {createdAt: "created_at" },
  }
);

module.exports = model("Comment", schema);
