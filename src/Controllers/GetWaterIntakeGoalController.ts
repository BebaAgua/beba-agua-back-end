import { Request, Response } from "express";

import { GetWaterIntakeGoalUseCase } from "../useCases/GetWaterIntakeGoalUseCase";
import { AppError } from "../utils/AppError";

class GetWaterIntakeGoalController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const getWaterIntakeGoalUseCase = new GetWaterIntakeGoalUseCase();

    const waterIntakeGoal = await getWaterIntakeGoalUseCase.execute({ userId });

    if (!waterIntakeGoal) {
      throw new AppError("Water intake goal not found", 404);
    }
    return response.status(200).json(waterIntakeGoal);
  }
}

export { GetWaterIntakeGoalController };
