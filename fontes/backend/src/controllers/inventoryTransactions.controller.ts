import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { InventoryTransactions } from "../models/ inventoryTransactions.model"; 
import { InventoryTransactionsService } from "../services/inventoryTransactions.service";

export class InventoryTransactionsController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactions); 
    const baseController : BaseController<InventoryTransactions> = new BaseController(  inventoryTransactionsService, " inventoryTransactions"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactions);

    const baseController : BaseController<InventoryTransactions> = new BaseController(  inventoryTransactionsService, " inventoryTransactions"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactions);

    const baseController : BaseController<InventoryTransactions> = new BaseController(  inventoryTransactionsService, " inventoryTransactions"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactions);

    const baseController : BaseController<InventoryTransactions> = new BaseController(  inventoryTransactionsService, " inventoryTransactions"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactions);

    const baseController : BaseController<InventoryTransactions> = new BaseController(  inventoryTransactionsService, " inventoryTransactions"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.body.databaseConnection.dbType, req.body.databaseConnection. inventoryTransactions);

    const baseController : BaseController<InventoryTransactions> = new BaseController(  inventoryTransactionsService, " inventoryTransactions"); 

    baseController.delete(req, res); 
  } 
}
