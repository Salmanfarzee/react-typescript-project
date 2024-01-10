import mongoose from "mongoose";
import FormModel from "../schema/form.schema.js";
// import CustomerModel from "../posp-commons/schemas/customer.schema";


export const createForm = async (req, res) => {
  try {
    // logger.debug(`createCustomer(): create Customer Module`);
    let form = new FormModel(req.body);
    form = await form.save();
    // if (req.params.proposalId) {
    //   const proposal = await ProposalModel.findById(req.params.proposalId);
    //   if (proposal) {
    //     proposal.customer = customer._id;
    //     await proposal.save();
    //   }
    // }
    res.status(200).send({
      message: "customer added successfully",
      customer: form,
    });
  } catch (err) {
    console.log(err);
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).send({ message: "Invalid customer object" });
    } else {
      console.log(err);
      res.status(500).send({ message: "Some unexpected error has occurred" });
    }
  }
};