interface IStrings { 
  stringData?: string
} 
export class Strings extends BaseResourceModel implements IStrings{ 
  stringData?: string

  static fromJson(jsonData: any) : Strings { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
