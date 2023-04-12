import { Router } from "express";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";
import { AuthenticateUserController } from "./useCases/AuthenticateUser/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController();
const autheticateUserController = new AuthenticateUserController();

router.post("/register", createUserController.handle);
router.post("/login", autheticateUserController.handle);

export { router };
