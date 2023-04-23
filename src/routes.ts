import { Router } from "express";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";
import { AuthenticateUserController } from "./useCases/AuthenticateUser/AuthenticateUserController";
import { CreateWaterIntakeGoalController } from "./useCases/CreateWaterIntakeGoal/CreateWaterIntakeGoalController";
import { ensureAuthenticated } from "./middlewares/authMiddleware";
import { GetWaterIntakeGoalController } from "./useCases/GetWaterIntakeGoal/ GetWaterIntakeGoalController";

const router = Router();

const createUserController = new CreateUserController();
const autheticateUserController = new AuthenticateUserController();
const createWaterIntakeGoalController = new CreateWaterIntakeGoalController();
const getWaterIntakeGoalController = new GetWaterIntakeGoalController();

router.post("/register", createUserController.handle);
router.post("/login", autheticateUserController.handle);
router.post(
  "/water-intake-goals",
  ensureAuthenticated,
  createWaterIntakeGoalController.handle
);
router.get(
  "/water-intake-goal/:userId",
  ensureAuthenticated,
  getWaterIntakeGoalController.handle
);

export { router };
