import { Request, Response } from "express";

import { CreateWaterIntakeUseCase } from "../useCases/CreateWaterIntakeUseCase";

class CreateWaterIntakeController {
  async handle(request: Request, response: Response) {
    const { userId, amount } = request.body;

    const createWaterIntakeUseCase = new CreateWaterIntakeUseCase();

    const waterIntake = await createWaterIntakeUseCase.execute({
      userId,
      amount,
    });

    return response.status(201).json(waterIntake);
  }
}

export { CreateWaterIntakeController };
