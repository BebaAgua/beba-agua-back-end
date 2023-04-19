import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { client } from "../../prisma/client";
import { AppError } from "../../utils/AppError";

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
      throw new AppError("Email or password incorrect!", 400);
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!", 400);
    }

    const { password: _, confirm_password: __, ...userWithoutPassword } = user;

    const token = sign({}, process.env.SECRET, {
      subject: user.id,
    });

    return { token, user: userWithoutPassword };
  }
}

export { AutheticateUserUseCase };
