import { BaseResourceModel } from "./base-resource.model" 
interface IOrdersTaxStatus { 
  taxStatusName?: string
} 
export class OrdersTaxStatus extends BaseResourceModel implements IOrdersTaxStatus{ 
  taxStatusName?: string

  static fromJson(jsonData: any) : OrdersTaxStatus { 
    return Object.assign(new OrdersTaxStatus(), jsonData); 
  } 
}
