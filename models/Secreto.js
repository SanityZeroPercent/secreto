import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    message: {
      /* The messages */

      type: String,
      required: [true, "Please provide the message."],
    },
  },
  {
    /* `collection` will correspond to a collection in your MongoDB database. */

    collection: "secreto",

    /* `timestamps` is correspond as the timestamp when the value gets added. */

    timestamps: { createdAt: "created_at", updatedAt: false },
  }
);

export default mongoose.models.Secreto || mongoose.model("Secreto", schema);
