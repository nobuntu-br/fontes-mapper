import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { InventoryTransactionTypes } from "../models/inventoryTransactionTypes.model"; 
import { InventoryTransactionTypesService } from "../services/inventoryTransactionTypes.service";

export class InventoryTransactionTypesController { 

  async create(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactionTypes"]); 
    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(inventoryTransactionTypesService,  "inventoryTransactionTypes"); 

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
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactionTypes"]); 
    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(inventoryTransactionTypesService,  "inventoryTransactionTypes"); 

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
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactionTypes"]); 
    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(inventoryTransactionTypesService,  "inventoryTransactionTypes"); 

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
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactionTypes"]); 
    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(inventoryTransactionTypesService,  "inventoryTransactionTypes"); 

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
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactionTypes"]); 
    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(inventoryTransactionTypesService,  "inventoryTransactionTypes"); 

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
    const  inventoryTransactionTypesService : InventoryTransactionTypesService = new InventoryTransactionTypesService(req.databaseConnection.databaseType, req.databaseConnection.models["inventoryTransactionTypes"]); 
    const baseController : BaseController<InventoryTransactionTypes> = new BaseController(inventoryTransactionTypesService,  "inventoryTransactionTypes"); 

    baseController.delete(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

}
