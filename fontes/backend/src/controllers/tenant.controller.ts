import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import TenantService from "../services/tenant.service";
import { Tenant } from "../models/tenant.model";
import { getDefaultTenantConnection } from "../adapters/database.config";
import TenantConnection from "../models/tenantConnection.model";

export class TenantController {

  async create(req: Request, res: Response){

    //Obtem a conexão padrão do banco de dados (banco Security)
    const defaultTenantConnection : TenantConnection = await getDefaultTenantConnection();
    //Obtem o modelo tenant
    const tenantModel = defaultTenantConnection.models["tenant"];

    //O Service será criado com base no tipo de banco de dados e o model usado
    const tenantService : TenantService = new TenantService(defaultTenantConnection.databaseType, tenantModel);
    //Base Controller é uma classe que já tem implementado todas as funções de CRUD
    const baseController : BaseController<Tenant> = new BaseController( tenantService, "Tenant");

    baseController.create(req, res);
  }

  async findAll(req: Request, res: Response){

    //Obtem a conexão padrão do banco de dados (banco Security)
    const defaultTenantConnection : TenantConnection = await getDefaultTenantConnection();
    //Obtem o modelo tenant
    const tenantModel = defaultTenantConnection.models["tenant"];

    //O Service será criado com base no tipo de banco de dados e o model usado
    const tenantService : TenantService = new TenantService(defaultTenantConnection.databaseType, tenantModel);
    //Base Controller é uma classe que já tem implementado todas as funções de CRUD
    const baseController : BaseController<Tenant> = new BaseController( tenantService, "Tenant");

    baseController.findAll(req, res);
  }

  async findById(req: Request, res: Response){

    //Obtem a conexão padrão do banco de dados (banco Security)
    const defaultTenantConnection : TenantConnection = await getDefaultTenantConnection();
    //Obtem o modelo tenant
    const tenantModel = defaultTenantConnection.models["tenant"];

    //O Service será criado com base no tipo de banco de dados e o model usado
    const tenantService : TenantService = new TenantService(defaultTenantConnection.databaseType, tenantModel);
    const baseController : BaseController<Tenant> = new BaseController( tenantService, "Tenant");

    baseController.findById(req, res);
  }

  async getCount(req: Request, res: Response){

    //Obtem a conexão padrão do banco de dados (banco Security)
    const defaultTenantConnection : TenantConnection = await getDefaultTenantConnection();
    //Obtem o modelo tenant
    const tenantModel = defaultTenantConnection.models["tenant"];

    //O Service será criado com base no tipo de banco de dados e o model usado
    const tenantService : TenantService = new TenantService(defaultTenantConnection.databaseType, tenantModel);
    const baseController : BaseController<Tenant> = new BaseController( tenantService, "Tenant");

    baseController.getCount(req, res);
  }

  async update(req: Request, res: Response){
    
    //Obtem a conexão padrão do banco de dados (banco Security)
    const defaultTenantConnection : TenantConnection = await getDefaultTenantConnection();
    //Obtem o modelo tenant
    const tenantModel = defaultTenantConnection.models["tenant"];

    //O Service será criado com base no tipo de banco de dados e o model usado
    const tenantService : TenantService = new TenantService(defaultTenantConnection.databaseType, tenantModel);
    const baseController : BaseController<Tenant> = new BaseController( tenantService, "Tenant");

    baseController.update(req, res);
  }

  async delete(req: Request, res: Response){

    //Obtem a conexão padrão do banco de dados (banco Security)
    const defaultTenantConnection : TenantConnection = await getDefaultTenantConnection();
    //Obtem o modelo tenant
    const tenantModel = defaultTenantConnection.models["tenant"];

    //O Service será criado com base no tipo de banco de dados e o model usado
    const tenantService : TenantService = new TenantService(defaultTenantConnection.databaseType, tenantModel);
    const baseController : BaseController<Tenant> = new BaseController( tenantService, "Tenant");

    baseController.delete(req, res);
  }

  async deleteAll(req: Request, res: Response){

    //Obtem a conexão padrão do banco de dados (banco Security)
    const defaultTenantConnection : TenantConnection = await getDefaultTenantConnection();
    //Obtem o modelo tenant
    const tenantModel = defaultTenantConnection.models["tenant"];

    //O Service será criado com base no tipo de banco de dados e o model usado
    const tenantService : TenantService = new TenantService(defaultTenantConnection.databaseType, tenantModel);
    const baseController : BaseController<Tenant> = new BaseController( tenantService, "Tenant");

    baseController.deleteAll(req, res);
  }

  async teste(req: Request, res: Response){
    try {
      const tenantService : TenantService = new TenantService(req.body.databaseConnection.dbType, req.body.databaseConnection.user);
      const data = await tenantService.findAll(2,2);
      
      return res.send(data);
    } catch (err) {
      return res.status(500).send({ message: err || "Ocorreu um erro de servidor ao tentar salvar "+"Tenant"+"." });
    }
  }

}