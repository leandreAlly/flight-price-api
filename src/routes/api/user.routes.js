import { Router } from "express";
import { registerAdmin, loginAdmin } from "../../controllers/user.controller";

const route = Router();

route.post("/signup", registerAdmin);
route.post("/login", loginAdmin);

export default route;
