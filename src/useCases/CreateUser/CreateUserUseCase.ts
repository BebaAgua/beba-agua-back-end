import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { client } from "../../prisma/client";
import { AppError } from "../../utils/AppError";

interface iUserRequest {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  weight: number;
  age: number;
}

class CreateUserUseCase {
  async execute({
    name,
    email,
    password,
    confirm_password,
    weight,
    age,
  }: iUserRequest) {
    const userAlreadyExists = await client.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!", 400);
    }

    const passwordHash = await hash(password, 8);
    const confirmPasswordHash = await hash(confirm_password, 8);

    if (password !== confirm_password) {
      throw new AppError("Passwords do not match!", 400);
    }

    const user = await client.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        confirm_password: confirmPasswordHash,
        weight,
        age,
      },
    });

    const { password: _, confirm_password: __, ...userWithoutPassword } = user;

    const token = sign({}, process.env.SECRET, {
      subject: user.id,
    });
    return { user: userWithoutPassword, token };
  }
}

export { CreateUserUseCase };
