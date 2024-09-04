import { BaseResourceModel } from "./base-resource.model" 
import { PurchaseOrders } from "./purchaseOrders.model"; 
import { Products } from "./products.model"; 
import { InventoryTransactions } from "./inventoryTransactions.model"; 
interface IPurchaseOrderDetails { 
  purchaseOrder?: PurchaseOrders
  product?: Products
  quantity?: number
  unitCost?: number
  dateReceived?: Date
  postedToInventory?: boolean
  inventory?: InventoryTransactions
} 
export class PurchaseOrderDetails extends BaseResourceModel implements IPurchaseOrderDetails{ 
  purchaseOrder?: PurchaseOrders
  product?: Products
  quantity?: number
  unitCost?: number
  dateReceived?: Date
  postedToInventory?: boolean
  inventory?: InventoryTransactions

  static fromJson(jsonData: any) : PurchaseOrderDetails { 
    return Object.assign(new PurchaseOrderDetails(), jsonData); 
  } 
}
