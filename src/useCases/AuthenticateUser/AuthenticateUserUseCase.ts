import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { client } from "../../prisma/client";

interface IRequest {
  email: string;
  password: string;
}

class AutheticateUserUseCase {
  async execute({ email, password }: IRequest) {
    const user = await client.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      const error = new Error("Email or password incorrect!");
      (error as any).status = 400;
      throw error;
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      const error = new Error("Email or password incorrect!");
      (error as any).status = 400;
      throw error;
    }

    const { password: _, confirm_password: __, ...userWithoutPassword } = user;

    const token = sign({}, process.env.SECRET, {
      subject: user.id,
    });

    return { token, user: userWithoutPassword };
  }
}

export { AutheticateUserUseCase };
