import { BaseResourceModel } from "./base-resource.model" 
interface IApplication { 
  name?: string
} 
export class Application extends BaseResourceModel implements IApplication{ 
  name?: string

  static fromJson(jsonData: any) : Application { 
    return Object.assign(new Application(), jsonData); 
  } 
}
