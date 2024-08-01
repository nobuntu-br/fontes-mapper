interface IShippers { 
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
export class Shippers extends BaseResourceModel implements IShippers{ 
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

  static fromJson(jsonData: any) : Shippers { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
