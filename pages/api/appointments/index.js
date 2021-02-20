import dbConnect from "../../../utils/dbConnect";
import Appointment from "../../../models/Appointment";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const appointments = await Appointment.find({});

        res.status(200).json({ success: true, data: appointments });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const appointment = await Appointment.create(req.body);

        res.status(201).json({ success: true, data: appointment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
