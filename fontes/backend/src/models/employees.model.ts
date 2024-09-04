import { BaseResourceModel } from "./base-resource.model" 
interface IEmployees { 
  company?: string
  lastName?: string
  firstName?: string
  emailAddress?: string
  jobTitle?: string
  businessPhone?: string
  homePhone?: string
  mobilePhone?: string
  faxNumber?: string
  address?: string
  city?: string
  stateProvince?: string
  zipPostalCode?: string
  countryRegion?: string
  webPage?: string
  notes?: string
  attachments?: string
} 
export class Employees extends BaseResourceModel implements IEmployees{ 
  company?: string
  lastName?: string
  firstName?: string
  emailAddress?: string
  jobTitle?: string
  businessPhone?: string
  homePhone?: string
  mobilePhone?: string
  faxNumber?: string
  address?: string
  city?: string
  stateProvince?: string
  zipPostalCode?: string
  countryRegion?: string
  webPage?: string
  notes?: string
  attachments?: string

  static fromJson(jsonData: any) : Employees { 
    return Object.assign(new Employees(), jsonData); 
  } 
}
