import { Router } from "express";
import { authenticateToken } from "./middlewares/authMiddleware";

import { CreateUserController } from "./Controllers/CreateUserController";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { CreateWaterIntakeGoalController } from "./Controllers/CreateWaterIntakeGoalController";
import { GetWaterIntakeGoalController } from "./Controllers/GetWaterIntakeGoalController";
import { CreateWaterIntakeController } from "./Controllers/CreateWaterIntakeController";

const router = Router();

const createUserController = new CreateUserController();
const autheticateUserController = new AuthenticateUserController();
const createWaterIntakeGoalController = new CreateWaterIntakeGoalController();
const getWaterIntakeGoalController = new GetWaterIntakeGoalController();
const createWaterIntakeController = new CreateWaterIntakeController();

router.post("/register", createUserController.handle);

router.post("/login", autheticateUserController.handle);

router.post(
  "/water-intake-goals",
  authenticateToken,
  createWaterIntakeGoalController.handle
);

router.get(
  "/water-intake-goal/:userId",
  authenticateToken,
  getWaterIntakeGoalController.handle
);

router.post(
  "/water-intake",
  authenticateToken,
  createWaterIntakeController.handle
);

export { router };
