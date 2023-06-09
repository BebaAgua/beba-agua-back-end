import { Request, Response } from "express";

import { AutheticateUserUseCase } from "../useCases/AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserUseCase = new AutheticateUserUseCase();

    const { user, token } = await authenticateUserUseCase.execute({
      email,
      password,
    });
    return response.json({ user, token });
  }
}

export { AuthenticateUserController };
