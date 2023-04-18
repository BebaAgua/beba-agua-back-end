import { Request, Response } from "express";
import { AutheticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserUseCase = new AutheticateUserUseCase();

    const { token, user } = await authenticateUserUseCase.execute({
      email,
      password,
    });
    return response.json({ token, user });
  }
}

export { AuthenticateUserController };
