import { Router } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { CreateWaterIntakeGoalController } from "./Controllers/CreateWaterIntakeGoalController";
import { authenticateToken } from "./middlewares/authMiddleware";
import { GetWaterIntakeGoalController } from "./Controllers/GetWaterIntakeGoalController";

const router = Router();

const createUserController = new CreateUserController();
const autheticateUserController = new AuthenticateUserController();
const createWaterIntakeGoalController = new CreateWaterIntakeGoalController();
const getWaterIntakeGoalController = new GetWaterIntakeGoalController();

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

export { router };
