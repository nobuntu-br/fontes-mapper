import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { ApplicationService } from "../services/application.service";

export class ApplicationController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  applicationService : ApplicationService = new ApplicationService(req.body.databaseConnection.dbType, req.body.databaseConnection. application); 
    const baseController : BaseController<Application> = new BaseController(  applicationService, " application"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  applicationService : ApplicationService = new ApplicationService(req.body.databaseConnection.dbType, req.body.databaseConnection. application);

    const baseController : BaseController<Application> = new BaseController(  applicationService, " application"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  applicationService : ApplicationService = new ApplicationService(req.body.databaseConnection.dbType, req.body.databaseConnection. application);

    const baseController : BaseController<Application> = new BaseController(  applicationService, " application"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  applicationService : ApplicationService = new ApplicationService(req.body.databaseConnection.dbType, req.body.databaseConnection. application);

    const baseController : BaseController<Application> = new BaseController(  applicationService, " application"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  applicationService : ApplicationService = new ApplicationService(req.body.databaseConnection.dbType, req.body.databaseConnection. application);

    const baseController : BaseController<Application> = new BaseController(  applicationService, " application"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  applicationService : ApplicationService = new ApplicationService(req.body.databaseConnection.dbType, req.body.databaseConnection. application);

    const baseController : BaseController<Application> = new BaseController(  applicationService, " application"); 

    baseController.delete(req, res); 
  } 
}
