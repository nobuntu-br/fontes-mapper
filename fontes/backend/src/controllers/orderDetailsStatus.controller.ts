import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { OrderDetailsStatus } from "../models/orderDetailsStatus.model"; 
import { OrderDetailsStatusService } from "../services/orderDetailsStatus.service";

export class OrderDetailsStatusController { 

  async create(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["orderDetailsStatus"]); 
    const baseController : BaseController<OrderDetailsStatus> = new BaseController(orderDetailsStatusService,  "orderDetailsStatus"); 

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
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["orderDetailsStatus"]); 
    const baseController : BaseController<OrderDetailsStatus> = new BaseController(orderDetailsStatusService,  "orderDetailsStatus"); 

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
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["orderDetailsStatus"]); 
    const baseController : BaseController<OrderDetailsStatus> = new BaseController(orderDetailsStatusService,  "orderDetailsStatus"); 

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
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["orderDetailsStatus"]); 
    const baseController : BaseController<OrderDetailsStatus> = new BaseController(orderDetailsStatusService,  "orderDetailsStatus"); 

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
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["orderDetailsStatus"]); 
    const baseController : BaseController<OrderDetailsStatus> = new BaseController(orderDetailsStatusService,  "orderDetailsStatus"); 

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
    const  orderDetailsStatusService : OrderDetailsStatusService = new OrderDetailsStatusService(req.databaseConnection.databaseType, req.databaseConnection.models["orderDetailsStatus"]); 
    const baseController : BaseController<OrderDetailsStatus> = new BaseController(orderDetailsStatusService,  "orderDetailsStatus"); 

    baseController.delete(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

}
