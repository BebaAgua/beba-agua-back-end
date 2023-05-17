import { Router } from "express";
import { authenticateToken } from "./middlewares/authMiddleware";

import { CreateUserController } from "./Controllers/CreateUserController";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";

import { CreateWaterIntakeGoalController } from "./Controllers/CreateWaterIntakeGoalController";
import { GetWaterIntakeGoalController } from "./Controllers/GetWaterIntakeGoalController";

import { CreateWaterIntakeController } from "./Controllers/CreateWaterIntakeController";
import { GetWaterIntakeController } from "./Controllers/GetWaterIntakeController";

import { UpdateUserController } from "./Controllers/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();

const autheticateUserController = new AuthenticateUserController();

const createWaterIntakeGoalController = new CreateWaterIntakeGoalController();
const getWaterIntakeGoalController = new GetWaterIntakeGoalController();

const createWaterIntakeController = new CreateWaterIntakeController();
const getWaterIntakeController = new GetWaterIntakeController();

const updateUserController = new UpdateUserController();

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

router.get(
  "/water-intake/:userId",
  authenticateToken,
  getWaterIntakeController.handle
);

router.put("/user/:userId", authenticateToken, updateUserController.handle);

export { router };
