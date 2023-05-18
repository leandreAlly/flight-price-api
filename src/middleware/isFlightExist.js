import { Flight } from "../models/flight";

const isFlightExist = async (req, res, next) => {
  const { source, destination, date } = req.body;

  try {
    const flight = await Flight.findOne({ source, destination, date });

    if (flight) {
      return res.status(409).json({ error: "Flight already exists" });
    }

    next();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while checking flight existence" });
  }
};

export { isFlightExist };
