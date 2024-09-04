import { BaseResourceModel } from "./base-resource.model" 
interface ICustomers { 
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
export class Customers extends BaseResourceModel implements ICustomers{ 
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

  static fromJson(jsonData: any) : Customers { 
    return Object.assign(new Customers(), jsonData); 
  } 
}
