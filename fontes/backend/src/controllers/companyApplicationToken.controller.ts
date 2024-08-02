import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { CompanyApplicationToken } from "../models/ companyApplicationToken.model"; 
import { CompanyApplicationTokenService } from "../services/companyApplicationToken.service";

export class CompanyApplicationTokenController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.body.databaseConnection.dbType, req.body.databaseConnection. companyApplicationToken); 
    const baseController : BaseController<CompanyApplicationToken> = new BaseController(  companyApplicationTokenService, " companyApplicationToken"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.body.databaseConnection.dbType, req.body.databaseConnection. companyApplicationToken);

    const baseController : BaseController<CompanyApplicationToken> = new BaseController(  companyApplicationTokenService, " companyApplicationToken"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.body.databaseConnection.dbType, req.body.databaseConnection. companyApplicationToken);

    const baseController : BaseController<CompanyApplicationToken> = new BaseController(  companyApplicationTokenService, " companyApplicationToken"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.body.databaseConnection.dbType, req.body.databaseConnection. companyApplicationToken);

    const baseController : BaseController<CompanyApplicationToken> = new BaseController(  companyApplicationTokenService, " companyApplicationToken"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.body.databaseConnection.dbType, req.body.databaseConnection. companyApplicationToken);

    const baseController : BaseController<CompanyApplicationToken> = new BaseController(  companyApplicationTokenService, " companyApplicationToken"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.body.databaseConnection.dbType, req.body.databaseConnection. companyApplicationToken);

    const baseController : BaseController<CompanyApplicationToken> = new BaseController(  companyApplicationTokenService, " companyApplicationToken"); 

    baseController.delete(req, res); 
  } 
}
