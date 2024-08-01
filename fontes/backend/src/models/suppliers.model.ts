interface ISuppliers { 
  company?: string,
  lastName?: string,
  firstName?: string,
  emailAddress?: string,
  jobTitle?: string,
  businessPhone?: string,
  homePhone?: string,
  mobilePhone?: string,
  faxNumber?: string,
  address?: string,
  city?: string,
  stateProvince?: string,
  zipPostalCode?: string,
  countryRegion?: string,
  webPage?: string,
  notes?: string,
  attachments?: string
} 
export class Suppliers extends BaseResourceModel implements ISuppliers{ 
  company?: string,
  lastName?: string,
  firstName?: string,
  emailAddress?: string,
  jobTitle?: string,
  businessPhone?: string,
  homePhone?: string,
  mobilePhone?: string,
  faxNumber?: string,
  address?: string,
  city?: string,
  stateProvince?: string,
  zipPostalCode?: string,
  countryRegion?: string,
  webPage?: string,
  notes?: string,
  attachments?: string

  static fromJson(jsonData: any) : Suppliers { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
