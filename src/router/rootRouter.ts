import { Router } from "express";
import { userRouter } from "./userRouter";
import { chatRouter } from "./chatRouter";
import { messageRouter } from "./meassgeRouter";
import { notificationRouter } from "./notificationRouter";

export const mainRouter = Router();
mainRouter.use("/user", userRouter);

mainRouter.use('/chat', chatRouter)

mainRouter.use('/message', messageRouter)

mainRouter.use('/notification', notificationRouter)
