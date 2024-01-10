import express from "express";
import {
  createForm

} from "../controller/form.controller.js";

const formRouter = express.Router();

formRouter.post("/", createForm);

export default formRouter;
