import { Request, Response } from "express";

import { GetWaterIntakeUseCase } from "../useCases/GetWaterIntakeUseCase";
import { AppError } from "../utils/AppError";

class GetWaterIntakeController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const getWaterIntakeUseCase = new GetWaterIntakeUseCase();

    const waterIntake = await getWaterIntakeUseCase.execute({ userId });

    if (!waterIntake) {
      throw new AppError("Water intake goal not found", 404);
    }
    return response.status(200).json(waterIntake);
  }
}

export { GetWaterIntakeController };
