import { client } from "../../prisma/client";
import { AppError } from "../../utils/AppError";
import { calculateDailyWaterIntake } from "../../utils/calculateDailyWaterIntake";

interface ICreateWaterIntakeGoalRequest {
  userId: string;
  weight: number;
  age: number;
}

class CreateWaterIntakeGoalUseCase {
  async execute({ userId, weight, age }: ICreateWaterIntakeGoalRequest) {
    const userExists = await client.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exist", 404);
    }

    if (userExists.age !== age || userExists.weight !== weight) {
      throw new AppError("Invalid age and/or weight", 400);
    }

    const currentWaterIntakeGoal = await client.waterIntakeGoal.findUnique({
      where: {
        userId,
      },
    });

    if (currentWaterIntakeGoal) {
      throw new AppError("User already has a water intake goal", 400);
    }

    const dailyWaterIntake = calculateDailyWaterIntake(weight, age);

    const waterIntakeGoal = await client.waterIntakeGoal.create({
      data: {
        userId,
        goalAmount: dailyWaterIntake,
      },
    });

    return waterIntakeGoal;
  }
}

export { CreateWaterIntakeGoalUseCase };
