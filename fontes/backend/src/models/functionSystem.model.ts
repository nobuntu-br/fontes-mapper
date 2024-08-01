import { BaseResourceModel } from "./base-resource.model";

interface IFunctionSystem {
  name?: string;
  route?: string;
  classname?: string;
}

export class FunctionSystem extends BaseResourceModel implements IFunctionSystem {
  name?: string;
  route?: string;
  classname?: string;

  static fromJson(jsonData: any) : FunctionSystem {
    return Object.assign(new FunctionSystem(), jsonData);
  }
}