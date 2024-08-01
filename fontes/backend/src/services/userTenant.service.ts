import { DbType } from "../adapters/createDb.adapter";
import { UserTenant } from "../models/userTenant.model";
import UserTenantRepository from "../repository/userTenant.repository";
import BaseService from "./base.service";
var apicache = require("apicache");

export default class UserTenantService extends BaseService<UserTenant> {
  repository: UserTenantRepository;

  constructor(dbType: DbType, model: any) {
    //Cria o repositório com dados para obter o banco de dados
    var _repository = new UserTenantRepository(dbType, model);
    super(_repository, dbType, model);
    this.repository = _repository;
  }

  async userHasAccessToTenant(userUID: string, tenantId: string ): Promise<boolean> {
    try {
      
      if (this.getUserAcessToTenantOnCache != null) {
        return true;
      }

      // Continue with the verification logic
      const userTenant = await this.repository.findOne({"userId": userUID, "tenantId": tenantId});

      if(userTenant == null){
        return false;
      }

      console.log("Tenant do usuário: ", userTenant);

      this.saveUserAcessToTenantOnCache(userUID, tenantId, userTenant);
      return true;

    } catch (error) {
      throw new Error("Erro ao buscar o usuário e os tenants " + error);
    }
  
  }

  saveUserAcessToTenantOnCache(userUID: string, tenantId: string, userTenant: Object){
    // Cache the tenant for 1 day
    apicache.set(userUID + tenantId, userTenant, '1 day');
  }

  getUserAcessToTenantOnCache(userUID: string, tenantId: string): string | null{
    //TODO se não encontrar nada do cache, retornar null
    return apicache.get(userUID + tenantId);
  }

  //TODO  um usuário X que deve ser administrador do tenant pode alterar quais usuários tem permissão no tenant. Ao ter feito alguma alteração, tem que ser alterado no cache.
  //TODO fazer a função que verifica se o usuário é admin do tenant para poder alterar a permissão dos outros ao tenant
  //TODO permitir o usuário passar o cargo de admin pra outra pessoa

}