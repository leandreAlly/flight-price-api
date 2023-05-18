import { Router } from "express";
import flightValidation from "../../validations/flight.validation";
import { isFlightExist } from "../../middleware/isFlightExist";
import { auth } from "../../middleware/auth";
import { isAdmin } from "../../middleware/isAdmin";
import {
  scheduleFlight,
  findFlightPrice,
} from "../../controllers/flight.controller";

const route = Router();

route.post("/", auth, isAdmin, flightValidation, isFlightExist, scheduleFlight);
route.post("/price", findFlightPrice);

export default route;
