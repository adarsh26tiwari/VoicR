import express from "express";
import { isAuth } from "../Middleware/isAuth.js";
import { getCurrentUser } from "../Controllers/user.controller.js";
import { saveAssistant } from "../Controllers/user.controller.js";

// This route is used to get the current logged in user's information

const userRouter = express.Router();
userRouter.post("/save-assistant", isAuth, saveAssistant);

userRouter.get("/current-user", isAuth, getCurrentUser);

export default userRouter;
  