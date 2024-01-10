// Import the express in typescript file
import express from 'express';
import mongoose from "mongoose"

 
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 4000 for running server.
const port: number = 4000;
 
// Handling '/' Request
app.get('/api', (_req, res) => {
    res.send("TypeScript With Express");
});

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from Express! 123123123" });
// });

mongoose
  .connect("mongodb+srv://salmanfarzee0001000:salmanfarzee0001000@cluster0.qx4pxtr.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Successfully connected to db");
  })
  .catch((err) => {
    console.log(`Error while conencting to db ${err}`);
  });

 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express `);
});