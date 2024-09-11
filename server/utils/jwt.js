import jwt from "jsonwebtoken";
import { userTranformer } from "../transformers/user";

const generateAccessToken = (user) => {
  const config = useRuntimeConfig();
  jwt.sign({ userId: user.id }, config.jwtAccessSecret, { expiresIn: "10m" });
};

const generateRefreshToken = (user) => {
  const config = useRuntimeConfig();
  jwt.sign({ userId: user.id }, config.jwtRefreshSecret, { expiresIn: "4h" });
};

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};
