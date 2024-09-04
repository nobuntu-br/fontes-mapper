import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { OrdersStatus } from "../models/ordersStatus.model"; 
import { OrdersStatusService } from "../services/ordersStatus.service";

export class OrdersStatusController { 

  async create(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersStatus"]); 
    const baseController : BaseController<OrdersStatus> = new BaseController(ordersStatusService,  "ordersStatus"); 

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
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersStatus"]); 
    const baseController : BaseController<OrdersStatus> = new BaseController(ordersStatusService,  "ordersStatus"); 

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
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersStatus"]); 
    const baseController : BaseController<OrdersStatus> = new BaseController(ordersStatusService,  "ordersStatus"); 

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
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersStatus"]); 
    const baseController : BaseController<OrdersStatus> = new BaseController(ordersStatusService,  "ordersStatus"); 

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
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersStatus"]); 
    const baseController : BaseController<OrdersStatus> = new BaseController(ordersStatusService,  "ordersStatus"); 

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
    const  ordersStatusService : OrdersStatusService = new OrdersStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["ordersStatus"]); 
    const baseController : BaseController<OrdersStatus> = new BaseController(ordersStatusService,  "ordersStatus"); 

    baseController.delete(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

}
