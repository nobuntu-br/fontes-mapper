import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Invoices } from "../models/ invoices.model"; 
import { InvoicesService } from "../services/invoices.service";

export class InvoicesController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  invoicesService : InvoicesService = new InvoicesService(req.body.databaseConnection.dbType, req.body.databaseConnection. invoices); 
    const baseController : BaseController<Invoices> = new BaseController(  invoicesService, " invoices"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  invoicesService : InvoicesService = new InvoicesService(req.body.databaseConnection.dbType, req.body.databaseConnection. invoices);

    const baseController : BaseController<Invoices> = new BaseController(  invoicesService, " invoices"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  invoicesService : InvoicesService = new InvoicesService(req.body.databaseConnection.dbType, req.body.databaseConnection. invoices);

    const baseController : BaseController<Invoices> = new BaseController(  invoicesService, " invoices"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  invoicesService : InvoicesService = new InvoicesService(req.body.databaseConnection.dbType, req.body.databaseConnection. invoices);

    const baseController : BaseController<Invoices> = new BaseController(  invoicesService, " invoices"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  invoicesService : InvoicesService = new InvoicesService(req.body.databaseConnection.dbType, req.body.databaseConnection. invoices);

    const baseController : BaseController<Invoices> = new BaseController(  invoicesService, " invoices"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  invoicesService : InvoicesService = new InvoicesService(req.body.databaseConnection.dbType, req.body.databaseConnection. invoices);

    const baseController : BaseController<Invoices> = new BaseController(  invoicesService, " invoices"); 

    baseController.delete(req, res); 
  } 
}
