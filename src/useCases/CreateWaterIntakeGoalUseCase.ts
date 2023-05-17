import { client } from "../prisma/client";
import { AppError } from "../utils/AppError";
import { calculateDailyWaterIntake } from "../utils/calculateDailyWaterIntake";

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

    const dailyWaterIntake = calculateDailyWaterIntake(weight, age);

    const existingWaterIntakeGoal = await client.waterIntakeGoal.findFirst({
      where: {
        userId,
        goalAmount: dailyWaterIntake,
      },
    });

    if (existingWaterIntakeGoal) {
      throw new AppError(
        "A water intake goal with this amount already exists for this user",
        400
      );
    }

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
