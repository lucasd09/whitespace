import { userService } from "../user";
import { GoogleUser } from "./types";

const { create, getByColumn } = userService;

export const googleService = {
  getAccountByGoogleId: async (googleId: string) => {
    const [user] = await getByColumn("googleId", googleId);

    return user;
  },
  createGoogleUser: async ({ email, name, sub: googleId, picture }: GoogleUser) => {
    const createdUser = await create({ name, email, googleId, picture });

    return createdUser;
  },
};
