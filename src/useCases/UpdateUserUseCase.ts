import { sign } from "jsonwebtoken";

import { client } from "../prisma/client";
import { AppError } from "../utils/AppError";

interface iUpdateUser {
  userId: string;
  name?: string;
  weight?: number;
  age?: number;
}

class UpdateUserUseCase {
  async execute({ userId, name, weight, age }: iUpdateUser) {
    const user = await client.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError("User does not exist!", 404);
    }

    if (!name && !weight && !age) {
      throw new AppError(
        "At least one field must be informed to update the user",
        400
      );
    }

    if (weight && isNaN(Number(weight))) {
      throw new AppError("Weight must be a number", 400);
    }

    if (age && isNaN(Number(age))) {
      throw new AppError("Age must be a number", 400);
    }

    user.name = name || user.name;
    user.weight = weight || user.weight;
    user.age = age || user.age;

    const updatedUser = await client.user.update({
      where: { id: userId },
      data: { name: user.name, weight: user.weight, age: user.age },
    });

    const {
      password: _,
      confirm_password: __,
      ...userWithoutPassword
    } = updatedUser;

    const token = sign({}, process.env.SECRET, {
      subject: user.id,
    });

    return { updatedUser: userWithoutPassword, token };
  }
}

export { UpdateUserUseCase };
