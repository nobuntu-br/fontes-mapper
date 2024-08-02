import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Shippers } from "../models/ shippers.model"; 
import { ShippersService } from "../services/shippers.service";

export class ShippersController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  shippersService : ShippersService = new ShippersService(req.body.databaseConnection.dbType, req.body.databaseConnection. shippers); 
    const baseController : BaseController<Shippers> = new BaseController(  shippersService, " shippers"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  shippersService : ShippersService = new ShippersService(req.body.databaseConnection.dbType, req.body.databaseConnection. shippers);

    const baseController : BaseController<Shippers> = new BaseController(  shippersService, " shippers"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  shippersService : ShippersService = new ShippersService(req.body.databaseConnection.dbType, req.body.databaseConnection. shippers);

    const baseController : BaseController<Shippers> = new BaseController(  shippersService, " shippers"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  shippersService : ShippersService = new ShippersService(req.body.databaseConnection.dbType, req.body.databaseConnection. shippers);

    const baseController : BaseController<Shippers> = new BaseController(  shippersService, " shippers"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  shippersService : ShippersService = new ShippersService(req.body.databaseConnection.dbType, req.body.databaseConnection. shippers);

    const baseController : BaseController<Shippers> = new BaseController(  shippersService, " shippers"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  shippersService : ShippersService = new ShippersService(req.body.databaseConnection.dbType, req.body.databaseConnection. shippers);

    const baseController : BaseController<Shippers> = new BaseController(  shippersService, " shippers"); 

    baseController.delete(req, res); 
  } 
}
