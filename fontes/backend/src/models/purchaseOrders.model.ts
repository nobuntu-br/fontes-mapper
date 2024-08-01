import { Suppliers } from "./supplier.model"; 
import { Employees } from "./createdBy.model"; 
import { PurchaseOrderStatus } from "./status.model"; 
import { PurchaseOrderDetails } from "./purchaseOrderDetails.model"; 
interface IPurchaseOrders { 
  supplier?: Suppliers,
  createdBy?: Employees,
  submittedDate?: Date,
  creationDate?: Date,
  status?: PurchaseOrderStatus,
  expectedDate?: Date,
  shippingFee?: number,
  taxes?: number,
  paymentDate?: Date,
  paymentAmount?: number,
  paymentMethod?: string,
  notes?: string,
  approvedBy?: number,
  approvedDate?: Date,
  submittedBy?: number,
  purchaseOrderDetails?: PurchaseOrderDetails
} 
export class PurchaseOrders extends BaseResourceModel implements IPurchaseOrders{ 
  supplier?: Suppliers,
  createdBy?: Employees,
  submittedDate?: Date,
  creationDate?: Date,
  status?: PurchaseOrderStatus,
  expectedDate?: Date,
  shippingFee?: number,
  taxes?: number,
  paymentDate?: Date,
  paymentAmount?: number,
  paymentMethod?: string,
  notes?: string,
  approvedBy?: number,
  approvedDate?: Date,
  submittedBy?: number,
  purchaseOrderDetails?: PurchaseOrderDetails

  static fromJson(jsonData: any) : PurchaseOrders { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
