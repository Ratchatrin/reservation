import { Schema, model } from "mongoose";

const CustomerSchema = Schema({
  name: String,
  phone: String,
  date: Number,
  month: Number,
  year: Number,
  person: String,
  area: String,
  time: String,
});

const Customer = model("Customer", CustomerSchema, "customer");
export default Customer;
