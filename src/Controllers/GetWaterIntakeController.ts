import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { GetWaterIntakeUseCase } from "../useCases/GetWaterIntakeUseCase";

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
