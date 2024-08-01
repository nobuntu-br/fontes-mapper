import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { OrdersService } from "../services/orders.service";

export class OrdersController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersService : OrdersService = new OrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. orders); 
    const baseController : BaseController<Orders> = new BaseController(  ordersService, " orders"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersService : OrdersService = new OrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. orders);

    const baseController : BaseController<Orders> = new BaseController(  ordersService, " orders"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersService : OrdersService = new OrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. orders);

    const baseController : BaseController<Orders> = new BaseController(  ordersService, " orders"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersService : OrdersService = new OrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. orders);

    const baseController : BaseController<Orders> = new BaseController(  ordersService, " orders"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersService : OrdersService = new OrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. orders);

    const baseController : BaseController<Orders> = new BaseController(  ordersService, " orders"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersService : OrdersService = new OrdersService(req.body.databaseConnection.dbType, req.body.databaseConnection. orders);

    const baseController : BaseController<Orders> = new BaseController(  ordersService, " orders"); 

    baseController.delete(req, res); 
  } 
}
