import { InventoryTransactionTypes } from "./transactionType.model"; 
import { Products } from "./product.model"; 
import { PurchaseOrders } from "./purchaseOrder.model"; 
import { Orders } from "./customerOrder.model"; 
interface IInventoryTransactions { 
  transactionType?: InventoryTransactionTypes,
  transactionCreatedDate?: Date,
  transactionModifiedDate?: Date,
  product?: Products,
  quantity?: number,
  purchaseOrder?: PurchaseOrders,
  customerOrder?: Orders,
  comments?: string
} 
export class InventoryTransactions extends BaseResourceModel implements IInventoryTransactions{ 
  transactionType?: InventoryTransactionTypes,
  transactionCreatedDate?: Date,
  transactionModifiedDate?: Date,
  product?: Products,
  quantity?: number,
  purchaseOrder?: PurchaseOrders,
  customerOrder?: Orders,
  comments?: string

  static fromJson(jsonData: any) : InventoryTransactions { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
