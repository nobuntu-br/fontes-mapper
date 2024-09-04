import { BaseResourceModel } from "./base-resource.model" 
interface ICompany { 
  name?: string
  databaseSchema?: string
} 
export class Company extends BaseResourceModel implements ICompany{ 
  name?: string
  databaseSchema?: string

  static fromJson(jsonData: any) : Company { 
    return Object.assign(new Company(), jsonData); 
  } 
}
