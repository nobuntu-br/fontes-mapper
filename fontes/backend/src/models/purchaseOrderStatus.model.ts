import { BaseResourceModel } from "./base-resource.model" 
interface IPurchaseOrderStatus { 
  status?: string
} 
export class PurchaseOrderStatus extends BaseResourceModel implements IPurchaseOrderStatus{ 
  status?: string

  static fromJson(jsonData: any) : PurchaseOrderStatus { 
    return Object.assign(new PurchaseOrderStatus(), jsonData); 
  } 
}
