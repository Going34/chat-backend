"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const chatRouter_1 = require("./chatRouter");
const meassgeRouter_1 = require("./meassgeRouter");
const notificationRouter_1 = require("./notificationRouter");
exports.mainRouter = (0, express_1.Router)();
exports.mainRouter.use("/user", userRouter_1.userRouter);
exports.mainRouter.use('/chat', chatRouter_1.chatRouter);
exports.mainRouter.use('/message', meassgeRouter_1.messageRouter);
exports.mainRouter.use('/notification', notificationRouter_1.notificationRouter);