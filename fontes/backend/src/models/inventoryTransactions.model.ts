import { BaseResourceModel } from "./base-resource.model" 
import { InventoryTransactionTypes } from "./inventoryTransactionTypes.model"; 
import { Products } from "./products.model"; 
import { PurchaseOrders } from "./purchaseOrders.model"; 
import { Orders } from "./orders.model"; 
interface IInventoryTransactions { 
  transactionType?: InventoryTransactionTypes
  transactionCreatedDate?: Date
  transactionModifiedDate?: Date
  product?: Products
  quantity?: number
  purchaseOrder?: PurchaseOrders
  customerOrder?: Orders
  comments?: string
} 
export class InventoryTransactions extends BaseResourceModel implements IInventoryTransactions{ 
  transactionType?: InventoryTransactionTypes
  transactionCreatedDate?: Date
  transactionModifiedDate?: Date
  product?: Products
  quantity?: number
  purchaseOrder?: PurchaseOrders
  customerOrder?: Orders
  comments?: string

  static fromJson(jsonData: any) : InventoryTransactions { 
    return Object.assign(new InventoryTransactions(), jsonData); 
  } 
}
