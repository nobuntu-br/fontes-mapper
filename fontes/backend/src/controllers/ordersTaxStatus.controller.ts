import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { OrdersTaxStatus } from "../models/ordersTaxStatus.model"; 
import { OrdersTaxStatusService } from "../services/ordersTaxStatus.service";

export class OrdersTaxStatusController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersTaxStatus); 
    const baseController : BaseController<OrdersTaxStatus> = new BaseController(  ordersTaxStatusService, " ordersTaxStatus"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersTaxStatus);

    const baseController : BaseController<OrdersTaxStatus> = new BaseController(  ordersTaxStatusService, " ordersTaxStatus"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersTaxStatus);

    const baseController : BaseController<OrdersTaxStatus> = new BaseController(  ordersTaxStatusService, " ordersTaxStatus"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersTaxStatus);

    const baseController : BaseController<OrdersTaxStatus> = new BaseController(  ordersTaxStatusService, " ordersTaxStatus"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersTaxStatus);

    const baseController : BaseController<OrdersTaxStatus> = new BaseController(  ordersTaxStatusService, " ordersTaxStatus"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersTaxStatus);

    const baseController : BaseController<OrdersTaxStatus> = new BaseController(  ordersTaxStatusService, " ordersTaxStatus"); 

    baseController.delete(req, res); 
  } 
}
