import moment from "moment-timezone";

import { client } from "../prisma/client";
import { AppError } from "../utils/AppError";

interface ICreateWaterIntakeRequest {
  userId: string;
  amount: number;
}

class CreateWaterIntakeUseCase {
  async execute({ userId, amount }: ICreateWaterIntakeRequest) {
    const userExists = await client.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exist", 404);
    }

    const waterIntake = await client.waterIntake.create({
      data: {
        userId,
        amount,
      },
    });

    const waterIntakeWithTimeZone = {
      ...waterIntake,
      createdAt: moment(waterIntake.createdAt).tz("America/Sao_Paulo").format(),
    };

    return waterIntakeWithTimeZone;
  }
}

export { CreateWaterIntakeUseCase };
