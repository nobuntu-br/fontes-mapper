import { Orders } from "./order.model"; 
import { Products } from "./product.model"; 
import { OrderDetailsStatus } from "./status.model"; 
interface IOrderDetails { 
  order?: Orders,
  product?: Products,
  quantity?: number,
  unitPrice?: number,
  discount?: number,
  status?: OrderDetailsStatus,
  dateAllocated?: Date,
  purchaseOrderId?: number,
  inventoryId?: number
} 
export class OrderDetails extends BaseResourceModel implements IOrderDetails{ 
  order?: Orders,
  product?: Products,
  quantity?: number,
  unitPrice?: number,
  discount?: number,
  status?: OrderDetailsStatus,
  dateAllocated?: Date,
  purchaseOrderId?: number,
  inventoryId?: number

  static fromJson(jsonData: any) : OrderDetails { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
