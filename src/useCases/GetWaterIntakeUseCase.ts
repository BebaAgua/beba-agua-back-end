import moment from "moment-timezone";
import { client } from "../prisma/client";
import { AppError } from "../utils/AppError";

interface IGetWaterIntakeRequest {
  userId: string;
  createdAt?: string;
  startDate?: string;
  endDate?: string;
}
class GetWaterIntakeUseCase {
  async execute({ userId }: IGetWaterIntakeRequest) {
    const userExists = await client.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exist", 404);
    }

    const waterIntake = await client.waterIntake.findMany({
      where: {
        userId,
      },
    });

    const waterIntakeWithTimeZone = waterIntake.map((item) => {
      const createdAtWithTimeZone = moment(item.createdAt)
        .tz("America/Sao_Paulo")
        .format();
      return {
        ...item,
        createdAt: createdAtWithTimeZone,
      };
    });

    if (waterIntakeWithTimeZone.length === 0) {
      throw new AppError("User does not have a water intake", 404);
    }

    return waterIntakeWithTimeZone;
  }
}
export { GetWaterIntakeUseCase };
