import { Request, Response } from "express";

import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const { name, weight, age } = request.body;

    const updateUserUseCase = new UpdateUserUseCase();

    const user = await updateUserUseCase.execute({
      userId,
      name,
      weight,
      age,
    });
    return response.status(200).json(user);
  }
}

export { UpdateUserController };
