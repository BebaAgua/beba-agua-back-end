import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, confirm_password, weight, age } =
      request.body;

    const createUserUsecase = new CreateUserUseCase();

    const user = await createUserUsecase.execute({
      name,
      email,
      password,
      confirm_password,
      weight,
      age,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
