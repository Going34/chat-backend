import express, { Response, Router, Request } from "express";
import { UserController } from "../controller/user.controller";
import { verifyToken } from "../middleware/jwt_token_verify";

export const userRouter = Router();

const user = new UserController();

userRouter.use(express.static("public"));

userRouter.post("/register", user.createUser);

userRouter.post("/login", user.loginUser);
// Don't put this into top if you are put this middleware on top then they apply on all routes

userRouter.use(verifyToken);

//when you write any route after verifyToken middlware then middleware apply on it

userRouter.post("/search", user.searchUser);

userRouter.post('/autologin', user.loginWithAccessToken)


