import { DbType } from "../adapters/createDb.adapter";
import { FunctionSystem } from "../models/functionSystem.model";
import FunctionSystemRepository from "../repository/functionSystem.repository";
import BaseService from "./base.service";

// const createDbAdapter = require("../repository/tenantfactory.repository");

export class FunctionSystemService extends BaseService<FunctionSystem> {

  constructor(dbType: DbType, model: any) {
    //Cria o repositório com dados para obter o banco de dados
    var repository: FunctionSystemRepository = new FunctionSystemRepository(dbType, model);
    super(repository, dbType, model);
  }

  async isPublicRoute(method: string, url: string) {
    // const dbAdapter = createDbAdapter(databaseConnection.databaseType,  databaseConnection.models.role); 
    

    if (this.dbType == 'mongodb') {
      var isPublicRouteQuery: any;
      isPublicRouteQuery = [
        { $match: { name: "guest" } },

        {
          $lookup: {
            from: "functionssystemroles",
            localField: "FunctionSystemRoles",
            foreignField: "_id",
            as: "FunctionSystemRoles",
          },
        },

        { $unwind: "$FunctionSystemRoles" },

        {
          $match: {
            "FunctionSystemRoles.authorized": true,
          },
        },
        {
          $lookup: {
            from: "functionssystems",
            localField: "FunctionSystemRoles.FunctionSystem",
            foreignField: "_id",
            as: "FunctionSystem",
          },
        },

        { $unwind: "$FunctionSystem" },

        {
          $match: {
            "FunctionSystem.route": { $eq: method + "#" + url },
          },
        },

        {
          $project: {
            name: 1,
            NomeDaRole: "$Roles.name",
            isAuthorized: "$FunctionSystemRoles.authorized",
            FunctionSystemRoute: "$FunctionSystem.route",
          },
        },
      ];

      // const role = await dbAdapter.findUsingQuery(isPublicRouteQuery);
      const role = this.repository.findCustom(isPublicRouteQuery);

      if (role != null) {
        return true;
      }

      return false;

    } else {

      throw new Error("Não implementado");
    }



    // return dbAdapter.findUsingQuery(isPublicRouteQuery);
    // return dbAdapter.find({});
    // findUsingQuery(isRouteIsPublicAggregate)
  }

}