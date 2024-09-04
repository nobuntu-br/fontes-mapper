import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Employees } from "../models/employees.model"; 
import { EmployeesService } from "../services/employees.service";

export class EmployeesController { 

  async create(req: Request, res: Response){ 
    try { 
      if (req.databaseConnection == undefined) { 
        console.warn("Erro ao obter dados da conexão com tenant"); 
        return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  employeesService : EmployeesService = new EmployeesService(req.databaseConnection.databaseType, req.databaseConnection.models["employees"]); 
    const baseController : BaseController<Employees> = new BaseController(employeesService,  "employees"); 

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
    const  employeesService : EmployeesService = new EmployeesService(req.databaseConnection.databaseType, req.databaseConnection.models["employees"]); 
    const baseController : BaseController<Employees> = new BaseController(employeesService,  "employees"); 

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
    const  employeesService : EmployeesService = new EmployeesService(req.databaseConnection.databaseType, req.databaseConnection.models["employees"]); 
    const baseController : BaseController<Employees> = new BaseController(employeesService,  "employees"); 

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
    const  employeesService : EmployeesService = new EmployeesService(req.databaseConnection.databaseType, req.databaseConnection.models["employees"]); 
    const baseController : BaseController<Employees> = new BaseController(employeesService,  "employees"); 

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
    const  employeesService : EmployeesService = new EmployeesService(req.databaseConnection.databaseType, req.databaseConnection.models["employees"]); 
    const baseController : BaseController<Employees> = new BaseController(employeesService,  "employees"); 

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
    const  employeesService : EmployeesService = new EmployeesService(req.databaseConnection.databaseType, req.databaseConnection.models["employees"]); 
    const baseController : BaseController<Employees> = new BaseController(employeesService,  "employees"); 

    baseController.delete(req, res); 
    } catch (error) { 
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor" }); 
    } 
  } 

}
