import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { client } from "../../prisma/client";

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
      const error = new Error("User already exists!");
      (error as any).status = 400;
      throw error;
    }

    const passwordHash = await hash(password, 8);
    const confirmPasswordHash = await hash(confirm_password, 8);

    if (password !== confirm_password) {
      const error = new Error("Passwords do not match!");
      (error as any).status = 400;
      throw error;
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
    const token = sign({}, process.env.SECRET, {
      subject: user.id,
    });
    return { user, token };
  }
}

export { CreateUserUseCase };
