import mongoose from "mongoose";
// import type Lead from "../../posp-types/types/lead";

const formSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    mobile: { type: String, required: true },
    nationality: { type: String, required: true },
    gender: { type: Number, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

formSchema.virtual("modifiedBy").set(function (userId) {
  if (this.isNew) {
    this.createdBy = userId;
    this.updatedBy = userId;
  } else {
    this.updatedBy = userId;
  }
});

const FormModel = mongoose.model("Lead", formSchema);

export default FormModel;
