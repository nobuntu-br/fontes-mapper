import { Company } from "./company.model"; 
import { Application } from "./application.model"; 
interface ICompanyApplicationToken { 
  company?: Company,
  application?: Application,
  token?: string
} 
export class CompanyApplicationToken extends BaseResourceModel implements ICompanyApplicationToken{ 
  company?: Company,
  application?: Application,
  token?: string

  static fromJson(jsonData: any) : CompanyApplicationToken { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
