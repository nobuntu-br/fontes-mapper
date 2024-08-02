import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Suppliers } from "../models/suppliers.model"; 
import { SuppliersService } from "../services/suppliers.service";

export class SuppliersController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  suppliersService : SuppliersService = new SuppliersService(req.body.databaseConnection.dbType, req.body.databaseConnection. suppliers); 
    const baseController : BaseController<Suppliers> = new BaseController(  suppliersService, " suppliers"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  suppliersService : SuppliersService = new SuppliersService(req.body.databaseConnection.dbType, req.body.databaseConnection. suppliers);

    const baseController : BaseController<Suppliers> = new BaseController(  suppliersService, " suppliers"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  suppliersService : SuppliersService = new SuppliersService(req.body.databaseConnection.dbType, req.body.databaseConnection. suppliers);

    const baseController : BaseController<Suppliers> = new BaseController(  suppliersService, " suppliers"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  suppliersService : SuppliersService = new SuppliersService(req.body.databaseConnection.dbType, req.body.databaseConnection. suppliers);

    const baseController : BaseController<Suppliers> = new BaseController(  suppliersService, " suppliers"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  suppliersService : SuppliersService = new SuppliersService(req.body.databaseConnection.dbType, req.body.databaseConnection. suppliers);

    const baseController : BaseController<Suppliers> = new BaseController(  suppliersService, " suppliers"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  suppliersService : SuppliersService = new SuppliersService(req.body.databaseConnection.dbType, req.body.databaseConnection. suppliers);

    const baseController : BaseController<Suppliers> = new BaseController(  suppliersService, " suppliers"); 

    baseController.delete(req, res); 
  } 
}
