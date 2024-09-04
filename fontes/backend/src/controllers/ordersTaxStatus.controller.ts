import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { OrdersTaxStatus } from "../models/ordersTaxStatus.model"; 
import { OrdersTaxStatusService } from "../services/ordersTaxStatus.service";

export class OrdersTaxStatusController { 

  async create(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersTaxStatus"]); 
    const baseController : BaseController<OrdersTaxStatus> = new BaseController(ordersTaxStatusService,  "ordersTaxStatus"); 

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
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersTaxStatus"]); 
    const baseController : BaseController<OrdersTaxStatus> = new BaseController(ordersTaxStatusService,  "ordersTaxStatus"); 

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
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersTaxStatus"]); 
    const baseController : BaseController<OrdersTaxStatus> = new BaseController(ordersTaxStatusService,  "ordersTaxStatus"); 

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
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersTaxStatus"]); 
    const baseController : BaseController<OrdersTaxStatus> = new BaseController(ordersTaxStatusService,  "ordersTaxStatus"); 

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
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersTaxStatus"]); 
    const baseController : BaseController<OrdersTaxStatus> = new BaseController(ordersTaxStatusService,  "ordersTaxStatus"); 

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
    const  ordersTaxStatusService : OrdersTaxStatusService = new OrdersTaxStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersTaxStatus"]); 
    const baseController : BaseController<OrdersTaxStatus> = new BaseController(ordersTaxStatusService,  "ordersTaxStatus"); 

    baseController.delete(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

}
