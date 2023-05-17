import { client } from "../prisma/client";
import { AppError } from "../utils/AppError";

interface IGetWaterIntakeRequest {
  userId: string;
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

    const waterIntanke = await client.waterIntake.findMany({
      where: {
        userId,
      },
    });

    if (!waterIntanke) {
      throw new AppError("User does not have a water intake", 404);
    }

    return waterIntanke;
  }
}
export { GetWaterIntakeUseCase };
