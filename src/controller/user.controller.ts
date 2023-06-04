import { Request, Response } from "express";
import { create } from "../service/userService/create.service";
import { login, tokenGenrate } from "../service/userService/login.service";
import { search } from "../service/userService/serachUser.service";
import { User } from "../model/user";

interface Iuser {
  _id: string;
  password: string;
  _doc: Record<string, string>;
}

export class UserController {
  createUser = async (req: Request, res: Response) => {
    try {
      const data = await create(req);
      res.status(201).send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  loginUser = async (req: Request, res: Response) => {
    try {
      const data = await login(req);
      res.status(200).send(data);
    } catch (e) {
      res.status(400).send(e);
    }
  };
  searchUser = async (req: Request, res: Response) => {
    try {
      const data = await search(req);
      res.status(200).send(data);
    } catch (error) {}
  };
  loginWithAccessToken = async (req: Request, res: Response) => {
    if (!req.body.user._id) {
      return res.status(400).send({
        message: "ReLogin is required",
      });
    }
    try {
      const user: Iuser | null = await User.findById(req.body.user._id);
      if (!user) {
        return res.status(400).send({
          message: "ReLogin is required",
        });
      }
      const token = tokenGenrate(user._id);
      res.status(200).send({ ...user._doc, password: null, token });
    } catch (error) {
      res.status(500).send(error);
    }
  };
}
