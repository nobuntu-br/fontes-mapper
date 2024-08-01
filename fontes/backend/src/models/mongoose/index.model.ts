import { Model, Mongoose } from "mongoose";

//TODO precisará ser gerada as importações
import userModel from "./user.model";


export default async function setModels(mongooseConnection: Mongoose) {

  var models: Model<any>[] = [];

  //TODO precisará ser gerado várias linhas como essa abaixo, com o model diferente
  models.push(userModel(mongooseConnection));

  return models;
}