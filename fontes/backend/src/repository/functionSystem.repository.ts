import createDbAdapter, { DbType } from "../adapters/createDb.adapter";
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter";
import { FunctionSystem } from "../models/functionSystem.model";
import BaseRepository from "./base.repository";

export default class FunctionSystemRepository extends BaseRepository<FunctionSystem>{

  constructor(dbType: DbType, model: any){
    const _adapter : IDatabaseAdapter<FunctionSystem> = createDbAdapter<FunctionSystem>(dbType, model, FunctionSystem.fromJson);
    super(_adapter);
  }

}