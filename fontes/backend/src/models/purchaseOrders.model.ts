import { BaseResourceModel } from "./base-resource.model" 
import { Suppliers } from "./suppliers.model"; 
import { Employees } from "./employees.model"; 
import { PurchaseOrderStatus } from "./purchaseOrderStatus.model"; 
import { PurchaseOrderDetails } from "./purchaseOrderDetails.model"; 
interface IPurchaseOrders { 
  supplier?: Suppliers
  createdBy?: Employees
  submittedDate?: Date
  creationDate?: Date
  status?: PurchaseOrderStatus
  expectedDate?: Date
  shippingFee?: number
  taxes?: number
  paymentDate?: Date
  paymentAmount?: number
  paymentMethod?: string
  notes?: string
  approvedBy?: number
  approvedDate?: Date
  submittedBy?: number
  purchaseOrderDetails?: PurchaseOrderDetails
} 
export class PurchaseOrders extends BaseResourceModel implements IPurchaseOrders{ 
  supplier?: Suppliers
  createdBy?: Employees
  submittedDate?: Date
  creationDate?: Date
  status?: PurchaseOrderStatus
  expectedDate?: Date
  shippingFee?: number
  taxes?: number
  paymentDate?: Date
  paymentAmount?: number
  paymentMethod?: string
  notes?: string
  approvedBy?: number
  approvedDate?: Date
  submittedBy?: number
  purchaseOrderDetails?: PurchaseOrderDetails

  static fromJson(jsonData: any) : PurchaseOrders { 
    return Object.assign(new PurchaseOrders(), jsonData); 
  } 
}
