const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    numberOfQuestions: Number,
    image: String,
    profession: { type: Schema.Types.ObjectId, ref: "Profession" },
    subjects: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
    rate: Number,
    sex: { type: String, enum: ["male", "female", "other"] },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
