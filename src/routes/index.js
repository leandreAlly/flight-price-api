import { Router } from "express";
import flightRoutes from "./api/flight.routes";
import userRoutes from "./api/user.routes";

const routes = Router();

routes.use("/flight", flightRoutes);
routes.use("/users", userRoutes);

export default routes;
