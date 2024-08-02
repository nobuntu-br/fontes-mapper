import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { OrderDetailsStatus } from "../models/orderDetailsStatus.model"; 
import { OrderDetailsStatusService } from "../services/orderDetailsStatus.service";

export class OrderDetailsStatusController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetailsStatus); 
    const baseController : BaseController<OrderDetailsStatus> = new BaseController(  orderDetailsStatusService, " orderDetailsStatus"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetailsStatus);

    const baseController : BaseController<OrderDetailsStatus> = new BaseController(  orderDetailsStatusService, " orderDetailsStatus"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetailsStatus);

    const baseController : BaseController<OrderDetailsStatus> = new BaseController(  orderDetailsStatusService, " orderDetailsStatus"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetailsStatus);

    const baseController : BaseController<OrderDetailsStatus> = new BaseController(  orderDetailsStatusService, " orderDetailsStatus"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetailsStatus);

    const baseController : BaseController<OrderDetailsStatus> = new BaseController(  orderDetailsStatusService, " orderDetailsStatus"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetailsStatus);

    const baseController : BaseController<OrderDetailsStatus> = new BaseController(  orderDetailsStatusService, " orderDetailsStatus"); 

    baseController.delete(req, res); 
  } 
}
