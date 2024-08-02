import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { OrderDetails } from "../models/ orderDetails.model"; 
import { OrderDetailsService } from "../services/orderDetails.service";

export class OrderDetailsController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsService : OrderDetailsService = new OrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetails); 
    const baseController : BaseController<OrderDetails> = new BaseController(  orderDetailsService, " orderDetails"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsService : OrderDetailsService = new OrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetails);

    const baseController : BaseController<OrderDetails> = new BaseController(  orderDetailsService, " orderDetails"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsService : OrderDetailsService = new OrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetails);

    const baseController : BaseController<OrderDetails> = new BaseController(  orderDetailsService, " orderDetails"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsService : OrderDetailsService = new OrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetails);

    const baseController : BaseController<OrderDetails> = new BaseController(  orderDetailsService, " orderDetails"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsService : OrderDetailsService = new OrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetails);

    const baseController : BaseController<OrderDetails> = new BaseController(  orderDetailsService, " orderDetails"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsService : OrderDetailsService = new OrderDetailsService(req.body.databaseConnection.dbType, req.body.databaseConnection. orderDetails);

    const baseController : BaseController<OrderDetails> = new BaseController(  orderDetailsService, " orderDetails"); 

    baseController.delete(req, res); 
  } 
}
