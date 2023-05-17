import { client } from "../prisma/client";
import { AppError } from "../utils/AppError";

interface IGetWaterIntakeGoalRequest {
  userId: string;
}

class GetWaterIntakeGoalUseCase {
  async execute({ userId }: IGetWaterIntakeGoalRequest) {
    const userExists = await client.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exist", 404);
    }

    const waterIntankeGoal = await client.waterIntakeGoal.findMany({
      where: {
        userId,
      },
    });

    if (!waterIntankeGoal) {
      throw new AppError("User does not have a water intake goal", 404);
    }

    return waterIntankeGoal;
  }
}
export { GetWaterIntakeGoalUseCase };
