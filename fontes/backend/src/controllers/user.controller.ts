import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { UserService } from "../services/user.service";
import { User } from "../models/user.model";

export class UserController {

  async create(req: Request, res: Response){
    //O Service será criado com base no tipo de banco de dados e o model usado
    const userService : UserService = new UserService(req.body.databaseConnection.dbType, req.body.databaseConnection.user);
    const baseController : BaseController<User> = new BaseController( userService, "user");

    baseController.create(req, res);
  }

  async findAll(req: Request, res: Response){
    //O Service será criado com base no tipo de banco de dados e o model usado
    const userService : UserService = new UserService(req.body.databaseConnection.dbType, req.body.databaseConnection.user);
    const baseController : BaseController<User> = new BaseController( userService, "user");

    baseController.findAll(req, res);
  }

  async findById(req: Request, res: Response){
    //O Service será criado com base no tipo de banco de dados e o model usado
    const userService : UserService = new UserService(req.body.databaseConnection.dbType, req.body.databaseConnection.user);
    const baseController : BaseController<User> = new BaseController( userService, "user");

    baseController.findById(req, res);
  }

  async getCount(req: Request, res: Response){
    //O Service será criado com base no tipo de banco de dados e o model usado
    const userService : UserService = new UserService(req.body.databaseConnection.dbType, req.body.databaseConnection.user);
    const baseController : BaseController<User> = new BaseController( userService, "user");

    baseController.getCount(req, res);
  }
  async update(req: Request, res: Response){
    //O Service será criado com base no tipo de banco de dados e o model usado
    const userService : UserService = new UserService(req.body.databaseConnection.dbType, req.body.databaseConnection.user);
    const baseController : BaseController<User> = new BaseController( userService, "user");

    baseController.update(req, res);
  }

  async delete(req: Request, res: Response){
    //O Service será criado com base no tipo de banco de dados e o model usado
    const userService : UserService = new UserService(req.body.databaseConnection.dbType, req.body.databaseConnection.user);
    const baseController : BaseController<User> = new BaseController( userService, "user");

    baseController.delete(req, res);
  }

  async deleteAll(req: Request, res: Response){
    //O Service será criado com base no tipo de banco de dados e o model usado
    const userService : UserService = new UserService(req.body.databaseConnection.dbType, req.body.databaseConnection.user);
    const baseController : BaseController<User> = new BaseController( userService, "user");

    baseController.deleteAll(req, res);
  }

}