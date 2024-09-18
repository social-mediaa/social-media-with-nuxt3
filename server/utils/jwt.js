import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  console.log("🚀 ~ generateAccessToken ~ user😒:", user);
  const config = useRuntimeConfig();
  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: "24h",
  });
};

const generateRefreshToken = (user) => {
  console.log("🚀 ~ generateRefreshToken😎 ~ user:", user);
  const config = useRuntimeConfig();
  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: "24h",
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
  console.log('55787878',config.jwtAccessSecret ,token);
  
  try {
    let x=jwt.verify(token,config.jwtAccessSecret)
    console.log('xxxxxxxxxxxxx',x);
    
    return x
  } catch (error) {
    console.log('errrrrrrrrrrrr',error);
    
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
