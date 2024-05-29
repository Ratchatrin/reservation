import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import Customer from "./model/customer.model.js";
const app = express();
app.use(json());
app.use(cors());
const PORT = process.env.PORT || 5050;
mongoose
  .connect(
    "mongodb+srv://ratchatrin12:QpACmHJUWMCJBLIl@cluster0.cayleoy.mongodb.net/reserved?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
  });
app.post("/reserved", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/getReserved/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Customer.findById(id);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
