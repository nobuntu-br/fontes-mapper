import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { InventoryTransactionTypes } from "../models/ inventoryTransactionTypes.model"; 
import { InventoryTransactionTypesService } from "../services/inventoryTransactionTypes.service";

export class InventoryTransactionTypesController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactionTypes); 
    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(  inventoryTransactionTypesService, " inventoryTransactionTypes"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactionTypes);

    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(  inventoryTransactionTypesService, " inventoryTransactionTypes"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactionTypes);

    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(  inventoryTransactionTypesService, " inventoryTransactionTypes"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactionTypes);

    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(  inventoryTransactionTypesService, " inventoryTransactionTypes"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactionTypes);

    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(  inventoryTransactionTypesService, " inventoryTransactionTypes"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactionTypes);

    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(  inventoryTransactionTypesService, " inventoryTransactionTypes"); 

    baseController.delete(req, res); 
  } 
}
