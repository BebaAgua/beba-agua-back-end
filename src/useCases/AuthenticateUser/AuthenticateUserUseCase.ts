import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { client } from "../../prisma/client";

interface IRequest {
  email: string;
  password: string;
}

class AutheticateUserUseCase {
  async execute({ email, password }: IRequest) {
    const userAlreadyExists = await client.user.findFirst({
      where: {
        email,
      },
    });
    if (!userAlreadyExists) {
      const error = new Error("Email or password incorrect!");
      (error as any).status = 400;
      throw error;
    }
    const passwordMatch = await compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
      const error = new Error("Email or password incorrect!");
      (error as any).status = 400;
      throw error;
    }

    const token = sign({}, "02cbce81-ed12-4129-8b78-3850c55a3c1e", {
      subject: userAlreadyExists.id,
    });

    return { token };
  }
}

export { AutheticateUserUseCase };
