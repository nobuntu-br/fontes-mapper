import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { InventoryTransactions } from "../models/inventoryTransactions.model"; 
import { InventoryTransactionsService } from "../services/inventoryTransactions.service";

export class InventoryTransactionsController { 

  async create(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactions"]); 
    const baseController : BaseController<InventoryTransactions> = new BaseController(inventoryTransactionsService,  "inventoryTransactions"); 

    baseController.create(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

  async findAll(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactions"]); 
    const baseController : BaseController<InventoryTransactions> = new BaseController(inventoryTransactionsService,  "inventoryTransactions"); 

    baseController.findAll(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

  async findById(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactions"]); 
    const baseController : BaseController<InventoryTransactions> = new BaseController(inventoryTransactionsService,  "inventoryTransactions"); 

    baseController.findById(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

  async update(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactions"]); 
    const baseController : BaseController<InventoryTransactions> = new BaseController(inventoryTransactionsService,  "inventoryTransactions"); 

    baseController.update(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

  async getCount(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactions"]); 
    const baseController : BaseController<InventoryTransactions> = new BaseController(inventoryTransactionsService,  "inventoryTransactions"); 

    baseController.getCount(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

  async delete(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionsService : InventoryTransactionsService = new InventoryTransactionsService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactions"]); 
    const baseController : BaseController<InventoryTransactions> = new BaseController(inventoryTransactionsService,  "inventoryTransactions"); 

    baseController.delete(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

}
