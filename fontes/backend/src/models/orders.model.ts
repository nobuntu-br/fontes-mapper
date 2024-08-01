import { Employees } from "./employee.model"; 
import { Customers } from "./customer.model"; 
import { Shippers } from "./shipper.model"; 
import { OrdersTaxStatus } from "./taxStatus.model"; 
import { OrdersStatus } from "./status.model"; 
import { OrderDetails } from "./orderDetails.model"; 
interface IOrders { 
  employee?: Employees,
  customer?: Customers,
  orderDate?: Date,
  shippedDate?: Date,
  shipper?: Shippers,
  shipName?: string,
  shipAddress?: string,
  shipCity?: string,
  shipStateProvince?: string,
  shipZipPostalCode?: string,
  shipCountryRegion?: string,
  shippingFee?: number,
  taxes?: number,
  paymentType?: string,
  paidDate?: Date,
  notes?: string,
  taxRate?: number,
  taxStatus?: OrdersTaxStatus,
  status?: OrdersStatus,
  orderDetails?: OrderDetails
} 
export class Orders extends BaseResourceModel implements IOrders{ 
  employee?: Employees,
  customer?: Customers,
  orderDate?: Date,
  shippedDate?: Date,
  shipper?: Shippers,
  shipName?: string,
  shipAddress?: string,
  shipCity?: string,
  shipStateProvince?: string,
  shipZipPostalCode?: string,
  shipCountryRegion?: string,
  shippingFee?: number,
  taxes?: number,
  paymentType?: string,
  paidDate?: Date,
  notes?: string,
  taxRate?: number,
  taxStatus?: OrdersTaxStatus,
  status?: OrdersStatus,
  orderDetails?: OrderDetails

  static fromJson(jsonData: any) : Orders { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
