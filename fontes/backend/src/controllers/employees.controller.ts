import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Employees } from "../models/ employees.model"; 
import { EmployeesService } from "../services/employees.service";

export class EmployeesController { 

  async create(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  employeesService : EmployeesService = new EmployeesService(req.body.databaseConnection.dbType, req.body.databaseConnection. employees); 
    const baseController : BaseController<Employees> = new BaseController(  employeesService, " employees"); 

    baseController.create(req, res); 
  } 

  async findAll(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  employeesService : EmployeesService = new EmployeesService(req.body.databaseConnection.dbType, req.body.databaseConnection. employees);

    const baseController : BaseController<Employees> = new BaseController(  employeesService, " employees"); 

    baseController.findAll(req, res); 
  } 

  async findById(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  employeesService : EmployeesService = new EmployeesService(req.body.databaseConnection.dbType, req.body.databaseConnection. employees);

    const baseController : BaseController<Employees> = new BaseController(  employeesService, " employees"); 

    baseController.findById(req, res); 
  } 

  async update(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  employeesService : EmployeesService = new EmployeesService(req.body.databaseConnection.dbType, req.body.databaseConnection. employees);

    const baseController : BaseController<Employees> = new BaseController(  employeesService, " employees"); 

    baseController.update(req, res); 
  } 

  async getCount(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  employeesService : EmployeesService = new EmployeesService(req.body.databaseConnection.dbType, req.body.databaseConnection. employees);

    const baseController : BaseController<Employees> = new BaseController(  employeesService, " employees"); 

    baseController.getCount(req, res); 
  } 

  async delete(req: Request, res: Response){ 
    //O Service será criado com base no tipo de banco de dados e o model usado 
    const  employeesService : EmployeesService = new EmployeesService(req.body.databaseConnection.dbType, req.body.databaseConnection. employees);

    const baseController : BaseController<Employees> = new BaseController(  employeesService, " employees"); 

    baseController.delete(req, res); 
  } 
}
