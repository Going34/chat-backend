"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const create_service_1 = require("../service/userService/create.service");
const login_service_1 = require("../service/userService/login.service");
const serachUser_service_1 = require("../service/userService/serachUser.service");
const user_1 = require("../model/user");
class UserController {
    constructor() {
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, create_service_1.create)(req);
                res.status(201).send(data);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
        this.loginUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, login_service_1.login)(req);
                res.status(200).send(data);
            }
            catch (e) {
                res.status(400).send(e);
            }
        });
        this.searchUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, serachUser_service_1.search)(req);
                res.status(200).send(data);
            }
            catch (error) { }
        });
        this.loginWithAccessToken = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.body.user._id) {
                return res.status(400).send({
                    message: "ReLogin is required",
                });
            }
            try {
                const user = yield user_1.User.findById(req.body.user._id);
                if (!user) {
                    return res.status(400).send({
                        message: "ReLogin is required",
                    });
                }
                const token = (0, login_service_1.tokenGenrate)(user._id);
                res.status(200).send(Object.assign(Object.assign({}, user._doc), { password: null, token }));
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.UserController = UserController;
