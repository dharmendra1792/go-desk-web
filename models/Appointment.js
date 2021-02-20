const mongoose = require("mongoose");

const AppointmentsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please add a email"],
    maxlength: [40, "Email cannot be more than 40 characters"],
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [40, "Name cannot be more than 40 characters"],
  },
  mobile: {
    type: String,
    required: [true, "Please add a mobile"],
    maxlength: [10, "Mobile cannot be more than 10 characters"],
  },
  address: {
    type: String,
    required: [true, "Please add a address"],
    maxlength: [120, "Address cannot be more than 120 characters"],
  },
  brand: {
    type: String,
    required: [true, "Please add a brand"],
    maxlength: [100, "Brand cannot be more than 100 characters"],
  },
  model: {
    type: String,
    required: [true, "Please add a model"],
    maxlength: [100, "Model cannot be more than 100 characters"],
  },
  serial_no: {
    type: String,
    required: [true, "Please add a serial no"],
    maxlength: [100, "Serial no cannot be more than 100 characters"],
  },
  warranty: {
    type: String,
    maxlength: [100, "Warranty cannot be more than 100 characters"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description cannot be more than 200 characters"],
  },
});

module.exports =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentsSchema);
