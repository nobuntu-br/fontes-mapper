import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Suppliers } from "../models/suppliers.model"; 
import { SuppliersService } from "../services/suppliers.service";

export class SuppliersController { 

  async create(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  suppliersService : SuppliersService = new SuppliersService(req.databaseConnection.databaseType, req.databaseConnection.models["suppliers"]); 
    const baseController : BaseController<Suppliers> = new BaseController(suppliersService,  "suppliers"); 

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
    const  suppliersService : SuppliersService = new SuppliersService(req.databaseConnection.databaseType, req.databaseConnection.models["suppliers"]); 
    const baseController : BaseController<Suppliers> = new BaseController(suppliersService,  "suppliers"); 

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
    const  suppliersService : SuppliersService = new SuppliersService(req.databaseConnection.databaseType, req.databaseConnection.models["suppliers"]); 
    const baseController : BaseController<Suppliers> = new BaseController(suppliersService,  "suppliers"); 

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
    const  suppliersService : SuppliersService = new SuppliersService(req.databaseConnection.databaseType, req.databaseConnection.models["suppliers"]); 
    const baseController : BaseController<Suppliers> = new BaseController(suppliersService,  "suppliers"); 

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
    const  suppliersService : SuppliersService = new SuppliersService(req.databaseConnection.databaseType, req.databaseConnection.models["suppliers"]); 
    const baseController : BaseController<Suppliers> = new BaseController(suppliersService,  "suppliers"); 

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
    const  suppliersService : SuppliersService = new SuppliersService(req.databaseConnection.databaseType, req.databaseConnection.models["suppliers"]); 
    const baseController : BaseController<Suppliers> = new BaseController(suppliersService,  "suppliers"); 

    baseController.delete(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

}
