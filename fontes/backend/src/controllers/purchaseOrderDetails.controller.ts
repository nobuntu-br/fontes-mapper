import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { PurchaseOrderDetails } from "../models/purchaseOrderDetails.model"; 
import { PurchaseOrderDetailsService } from "../services/purchaseOrderDetails.service";

export class PurchaseOrderDetailsController { 

  async create(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.databaseConnection.databaseType, req.databaseConnection.models["purchaseOrderDetails"]); 
    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(purchaseOrderDetailsService,  "purchaseOrderDetails"); 

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
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.databaseConnection.databaseType, req.databaseConnection.models["purchaseOrderDetails"]); 
    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(purchaseOrderDetailsService,  "purchaseOrderDetails"); 

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
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.databaseConnection.databaseType, req.databaseConnection.models["purchaseOrderDetails"]); 
    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(purchaseOrderDetailsService,  "purchaseOrderDetails"); 

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
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.databaseConnection.databaseType, req.databaseConnection.models["purchaseOrderDetails"]); 
    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(purchaseOrderDetailsService,  "purchaseOrderDetails"); 

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
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.databaseConnection.databaseType, req.databaseConnection.models["purchaseOrderDetails"]); 
    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(purchaseOrderDetailsService,  "purchaseOrderDetails"); 

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
    const  purchaseOrderDetailsService : PurchaseOrderDetailsService = new PurchaseOrderDetailsService(req.databaseConnection.databaseType, req.databaseConnection.models["purchaseOrderDetails"]); 
    const baseController : BaseController<PurchaseOrderDetails> = new BaseController(purchaseOrderDetailsService,  "purchaseOrderDetails"); 

    baseController.delete(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

}
