import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { SalesReportsService } from "../services/salesReports.service";

export class SalesReportsController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  salesReportsService : SalesReportsService = new SalesReportsService(req.body.databaseConnection.dbType, req.body.databaseConnection. salesReports); 
    const baseController : BaseController<SalesReports> = new BaseController(  salesReportsService, " salesReports"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  salesReportsService : SalesReportsService = new SalesReportsService(req.body.databaseConnection.dbType, req.body.databaseConnection. salesReports);

    const baseController : BaseController<SalesReports> = new BaseController(  salesReportsService, " salesReports"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  salesReportsService : SalesReportsService = new SalesReportsService(req.body.databaseConnection.dbType, req.body.databaseConnection. salesReports);

    const baseController : BaseController<SalesReports> = new BaseController(  salesReportsService, " salesReports"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  salesReportsService : SalesReportsService = new SalesReportsService(req.body.databaseConnection.dbType, req.body.databaseConnection. salesReports);

    const baseController : BaseController<SalesReports> = new BaseController(  salesReportsService, " salesReports"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  salesReportsService : SalesReportsService = new SalesReportsService(req.body.databaseConnection.dbType, req.body.databaseConnection. salesReports);

    const baseController : BaseController<SalesReports> = new BaseController(  salesReportsService, " salesReports"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  salesReportsService : SalesReportsService = new SalesReportsService(req.body.databaseConnection.dbType, req.body.databaseConnection. salesReports);

    const baseController : BaseController<SalesReports> = new BaseController(  salesReportsService, " salesReports"); 

    baseController.delete(req, res); 
  } 
}
