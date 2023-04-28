import { Request, Response } from "express";
import { CreateWaterIntakeGoalUseCase } from "../useCases/CreateWaterIntakeGoalUseCase";

class CreateWaterIntakeGoalController {
  async handle(request: Request, response: Response) {
    const { userId, weight, age } = request.body;

    const createWaterIntakeGoalUseCase = new CreateWaterIntakeGoalUseCase();

    const waterIntakeGoal = await createWaterIntakeGoalUseCase.execute({
      userId,
      weight,
      age,
    });

    return response.status(201).json(waterIntakeGoal);
  }
}

export { CreateWaterIntakeGoalController };
