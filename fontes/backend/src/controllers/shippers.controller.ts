import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Shippers } from "../models/shippers.model"; 
import { ShippersService } from "../services/shippers.service";

export class ShippersController { 

  async create(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  shippersService : ShippersService = new ShippersService(req.databaseConnection.databaseType, req.databaseConnection.models["shippers"]); 
    const baseController : BaseController<Shippers> = new BaseController(shippersService,  "shippers"); 

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
    const  shippersService : ShippersService = new ShippersService(req.databaseConnection.databaseType, req.databaseConnection.models["shippers"]); 
    const baseController : BaseController<Shippers> = new BaseController(shippersService,  "shippers"); 

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
    const  shippersService : ShippersService = new ShippersService(req.databaseConnection.databaseType, req.databaseConnection.models["shippers"]); 
    const baseController : BaseController<Shippers> = new BaseController(shippersService,  "shippers"); 

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
    const  shippersService : ShippersService = new ShippersService(req.databaseConnection.databaseType, req.databaseConnection.models["shippers"]); 
    const baseController : BaseController<Shippers> = new BaseController(shippersService,  "shippers"); 

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
    const  shippersService : ShippersService = new ShippersService(req.databaseConnection.databaseType, req.databaseConnection.models["shippers"]); 
    const baseController : BaseController<Shippers> = new BaseController(shippersService,  "shippers"); 

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
    const  shippersService : ShippersService = new ShippersService(req.databaseConnection.databaseType, req.databaseConnection.models["shippers"]); 
    const baseController : BaseController<Shippers> = new BaseController(shippersService,  "shippers"); 

    baseController.delete(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

}
