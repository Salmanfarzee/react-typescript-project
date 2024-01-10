import express from "express";
import formRouter from "./form.routes.js";


const router = express.Router();

router.use("/form", formRouter);


export default router;
