import { BaseResourceModel } from "./base-resource.model" 
import { Orders } from "./orders.model"; 
import { Products } from "./products.model"; 
import { OrderDetailsStatus } from "./orderDetailsStatus.model"; 
interface IOrderDetails { 
  order?: Orders
  product?: Products
  quantity?: number
  unitPrice?: number
  discount?: number
  status?: OrderDetailsStatus
  dateAllocated?: Date
  purchaseOrderId?: number
  inventoryId?: number
} 
export class OrderDetails extends BaseResourceModel implements IOrderDetails{ 
  order?: Orders
  product?: Products
  quantity?: number
  unitPrice?: number
  discount?: number
  status?: OrderDetailsStatus
  dateAllocated?: Date
  purchaseOrderId?: number
  inventoryId?: number

  static fromJson(jsonData: any) : OrderDetails { 
    return Object.assign(new OrderDetails(), jsonData); 
  } 
}
