import { BaseResourceModel } from "./base-resource.model" 
interface IInventoryTransactionTypes { 
  typeName?: string
} 
export class InventoryTransactionTypes extends BaseResourceModel implements IInventoryTransactionTypes{ 
  typeName?: string

  static fromJson(jsonData: any) : InventoryTransactionTypes { 
    return Object.assign(new InventoryTransactionTypes(), jsonData); 
  } 
}
