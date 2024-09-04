import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { CompanyApplicationToken } from "../models/companyApplicationToken.model"; 
import { CompanyApplicationTokenService } from "../services/companyApplicationToken.service";

export class CompanyApplicationTokenController { 

  async create(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.databaseConnection.databaseType, req.databaseConnection.models["companyApplicationToken"]); 
    const baseController : BaseController<CompanyApplicationToken> = new BaseController(companyApplicationTokenService,  "companyApplicationToken"); 

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
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.databaseConnection.databaseType, req.databaseConnection.models["companyApplicationToken"]); 
    const baseController : BaseController<CompanyApplicationToken> = new BaseController(companyApplicationTokenService,  "companyApplicationToken"); 

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
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.databaseConnection.databaseType, req.databaseConnection.models["companyApplicationToken"]); 
    const baseController : BaseController<CompanyApplicationToken> = new BaseController(companyApplicationTokenService,  "companyApplicationToken"); 

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
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.databaseConnection.databaseType, req.databaseConnection.models["companyApplicationToken"]); 
    const baseController : BaseController<CompanyApplicationToken> = new BaseController(companyApplicationTokenService,  "companyApplicationToken"); 

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
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.databaseConnection.databaseType, req.databaseConnection.models["companyApplicationToken"]); 
    const baseController : BaseController<CompanyApplicationToken> = new BaseController(companyApplicationTokenService,  "companyApplicationToken"); 

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
    const  companyApplicationTokenService : CompanyApplicationTokenService = new CompanyApplicationTokenService(req.databaseConnection.databaseType, req.databaseConnection.models["companyApplicationToken"]); 
    const baseController : BaseController<CompanyApplicationToken> = new BaseController(companyApplicationTokenService,  "companyApplicationToken"); 

    baseController.delete(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

}
