import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  console.log("🚀 ~ generateAccessToken ~ user😒:", user);
  const config = useRuntimeConfig();
  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: "10m",
  });
};

const generateRefreshToken = (user) => {
  console.log("🚀 ~ generateRefreshToken😎 ~ user:", user);
  const config = useRuntimeConfig();
  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: "4h",
  });
};

export const decodeRefreshToken = (token) => {
  const config = useRuntimeConfig()
  try {
    return jwt.verify(token,config.jwtRefreshSecret)
    // the token is expired or not 👆
  } catch (error) {
    return null
  }
};

export const decodeAccessToken = (token) => {
  const config = useRuntimeConfig()
  try {
    return jwt.verify(token,config.jwtAccessSecret)
  } catch (error) {
    return null
  }
};

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

export const sendRefreshToken = (event, token) => {
  console.log("EV💋", event);
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true,
  });
};
