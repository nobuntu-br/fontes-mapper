import { PurchaseOrders } from "./purchaseOrder.model"; 
import { Products } from "./product.model"; 
import { InventoryTransactions } from "./inventory.model"; 
interface IPurchaseOrderDetails { 
  purchaseOrder?: PurchaseOrders,
  product?: Products,
  quantity?: number,
  unitCost?: number,
  dateReceived?: Date,
  postedToInventory?: boolean,
  inventory?: InventoryTransactions
} 
export class PurchaseOrderDetails extends BaseResourceModel implements IPurchaseOrderDetails{ 
  purchaseOrder?: PurchaseOrders,
  product?: Products,
  quantity?: number,
  unitCost?: number,
  dateReceived?: Date,
  postedToInventory?: boolean,
  inventory?: InventoryTransactions

  static fromJson(jsonData: any) : PurchaseOrderDetails { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
