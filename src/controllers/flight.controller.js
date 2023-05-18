import { Flight } from "../models/flight";

const scheduleFlight = async (req, res) => {
  const { source, destination, date, status, companies } = req.body;

  try {
    const flight = new Flight({
      source,
      destination,
      date: new Date(date),
      status,
      company: companies,
    });

    await flight.save();

    return res
      .status(201)
      .json({ message: "flight created successfully", flight });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while scheduling the flight" });
  }
};

const findFlightPrice = async (req, res) => {
  const { source, destination } = req.body;

  try {
    const flight = await Flight.findOne({ source, destination });

    if (!flight) {
      return res.status(404).json({ message: "No flights found" });
    }

    const flightData = flight.company.reduce((result, company) => {
      result[company.name] = `₹${company.price}`;
      return result;
    }, {});

    return res.status(200).json({ flightData });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while searching for flights" });
  }
};

export { scheduleFlight, findFlightPrice };
