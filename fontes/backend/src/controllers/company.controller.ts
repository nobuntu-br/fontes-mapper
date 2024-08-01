import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { CompanyService } from "../services/company.service";

export class CompanyController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyService : CompanyService = new CompanyService(req.body.databaseConnection.dbType, req.body.databaseConnection. company); 
    const baseController : BaseController<Company> = new BaseController(  companyService, " company"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyService : CompanyService = new CompanyService(req.body.databaseConnection.dbType, req.body.databaseConnection. company);

    const baseController : BaseController<Company> = new BaseController(  companyService, " company"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyService : CompanyService = new CompanyService(req.body.databaseConnection.dbType, req.body.databaseConnection. company);

    const baseController : BaseController<Company> = new BaseController(  companyService, " company"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyService : CompanyService = new CompanyService(req.body.databaseConnection.dbType, req.body.databaseConnection. company);

    const baseController : BaseController<Company> = new BaseController(  companyService, " company"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyService : CompanyService = new CompanyService(req.body.databaseConnection.dbType, req.body.databaseConnection. company);

    const baseController : BaseController<Company> = new BaseController(  companyService, " company"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyService : CompanyService = new CompanyService(req.body.databaseConnection.dbType, req.body.databaseConnection. company);

    const baseController : BaseController<Company> = new BaseController(  companyService, " company"); 

    baseController.delete(req, res); 
  } 
}
