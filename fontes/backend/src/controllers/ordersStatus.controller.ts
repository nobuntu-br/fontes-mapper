import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { OrdersStatus } from "../models/ordersStatus.model"; 
import { OrdersStatusService } from "../services/ordersStatus.service";

export class OrdersStatusController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersStatus); 
    const baseController : BaseController<OrdersStatus> = new BaseController(  ordersStatusService, " ordersStatus"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersStatus);

    const baseController : BaseController<OrdersStatus> = new BaseController(  ordersStatusService, " ordersStatus"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersStatus);

    const baseController : BaseController<OrdersStatus> = new BaseController(  ordersStatusService, " ordersStatus"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersStatus);

    const baseController : BaseController<OrdersStatus> = new BaseController(  ordersStatusService, " ordersStatus"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersStatus);

    const baseController : BaseController<OrdersStatus> = new BaseController(  ordersStatusService, " ordersStatus"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.body.databaseConnection.dbType, req.body.databaseConnection. ordersStatus);

    const baseController : BaseController<OrdersStatus> = new BaseController(  ordersStatusService, " ordersStatus"); 

    baseController.delete(req, res); 
  } 
}
