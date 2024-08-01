interface ISalesReports { 
  display?: string,
  title?: string,
  filterRowSource?: string,
  padrao?: boolean
} 
export class SalesReports extends BaseResourceModel implements ISalesReports{ 
  display?: string,
  title?: string,
  filterRowSource?: string,
  padrao?: boolean

  static fromJson(jsonData: any) : SalesReports { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
