import { Router } from "express";
import dashboardController from "../controllers/dashboard.js";
import { checkRoles } from "../middlewares/access-control.middleware.js";

const router = Router();

router.get("/locations", checkRoles(["admin"]), dashboardController.getGlobalViewLocations);

router.get("/products", checkRoles(["admin"]), dashboardController.getGlobalViewProducts);

export default router;
