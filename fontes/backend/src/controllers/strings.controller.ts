import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { StringsService } from "../services/strings.service";

export class StringsController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  stringsService : StringsService = new StringsService(req.body.databaseConnection.dbType, req.body.databaseConnection. strings); 
    const baseController : BaseController<Strings> = new BaseController(  stringsService, " strings"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  stringsService : StringsService = new StringsService(req.body.databaseConnection.dbType, req.body.databaseConnection. strings);

    const baseController : BaseController<Strings> = new BaseController(  stringsService, " strings"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  stringsService : StringsService = new StringsService(req.body.databaseConnection.dbType, req.body.databaseConnection. strings);

    const baseController : BaseController<Strings> = new BaseController(  stringsService, " strings"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  stringsService : StringsService = new StringsService(req.body.databaseConnection.dbType, req.body.databaseConnection. strings);

    const baseController : BaseController<Strings> = new BaseController(  stringsService, " strings"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  stringsService : StringsService = new StringsService(req.body.databaseConnection.dbType, req.body.databaseConnection. strings);

    const baseController : BaseController<Strings> = new BaseController(  stringsService, " strings"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  stringsService : StringsService = new StringsService(req.body.databaseConnection.dbType, req.body.databaseConnection. strings);

    const baseController : BaseController<Strings> = new BaseController(  stringsService, " strings"); 

    baseController.delete(req, res); 
  } 
}
