import { sendError } from "#imports";
import { createUser } from "../../db/users.js";
import { userTranformer } from "~/server/transformers/user.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { userName, email, password, repeatPassword, name } = body;

  if (!userName || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "invalid params",
      })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "password do not match",
      })
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: "https://picsum.photos/200/200",
  };

  const user = await createUser(userData);

  return {
    body: userTranformer(user),
  };
});
