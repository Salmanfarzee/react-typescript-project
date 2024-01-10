import express from "express" 
import mongoose from "mongoose"
import routes from "./routes/index.js"

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// app.use("/api", routes);


// Database
mongoose
.connect("mongodb+srv://salmanfarzee0001000:salmanfarzee0001000@cluster0.qx4pxtr.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Successfully connected to db");
  })
  .catch((err) => {
    console.log(`Error while conencting to db ${err}`);
  });

// Server
app.listen(4000, () => {
  console.log(`Server started, listening on port 4000`);
});
