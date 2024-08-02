import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Customers } from "../models/ customers.model"; 
import { CustomersService } from "../services/customers.service";

export class CustomersController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  customersService : CustomersService = new CustomersService(req.body.databaseConnection.dbType, req.body.databaseConnection. customers); 
    const baseController : BaseController<Customers> = new BaseController(  customersService, " customers"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  customersService : CustomersService = new CustomersService(req.body.databaseConnection.dbType, req.body.databaseConnection. customers);

    const baseController : BaseController<Customers> = new BaseController(  customersService, " customers"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  customersService : CustomersService = new CustomersService(req.body.databaseConnection.dbType, req.body.databaseConnection. customers);

    const baseController : BaseController<Customers> = new BaseController(  customersService, " customers"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  customersService : CustomersService = new CustomersService(req.body.databaseConnection.dbType, req.body.databaseConnection. customers);

    const baseController : BaseController<Customers> = new BaseController(  customersService, " customers"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  customersService : CustomersService = new CustomersService(req.body.databaseConnection.dbType, req.body.databaseConnection. customers);

    const baseController : BaseController<Customers> = new BaseController(  customersService, " customers"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  customersService : CustomersService = new CustomersService(req.body.databaseConnection.dbType, req.body.databaseConnection. customers);

    const baseController : BaseController<Customers> = new BaseController(  customersService, " customers"); 

    baseController.delete(req, res); 
  } 
}
