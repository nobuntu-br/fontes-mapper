import { BaseResourceModel } from "./base-resource.model" 
import { Employees } from "./employees.model"; 
import { Customers } from "./customers.model"; 
import { Shippers } from "./shippers.model"; 
import { OrdersTaxStatus } from "./ordersTaxStatus.model"; 
import { OrdersStatus } from "./ordersStatus.model"; 
import { OrderDetails } from "./orderDetails.model"; 
interface IOrders { 
  employee?: Employees
  customer?: Customers
  orderDate?: Date
  shippedDate?: Date
  shipper?: Shippers
  shipName?: string
  shipAddress?: string
  shipCity?: string
  shipStateProvince?: string
  shipZipPostalCode?: string
  shipCountryRegion?: string
  shippingFee?: number
  taxes?: number
  paymentType?: string
  paidDate?: Date
  notes?: string
  taxRate?: number
  taxStatus?: OrdersTaxStatus
  status?: OrdersStatus
  orderDetails?: OrderDetails
} 
export class Orders extends BaseResourceModel implements IOrders{ 
  employee?: Employees
  customer?: Customers
  orderDate?: Date
  shippedDate?: Date
  shipper?: Shippers
  shipName?: string
  shipAddress?: string
  shipCity?: string
  shipStateProvince?: string
  shipZipPostalCode?: string
  shipCountryRegion?: string
  shippingFee?: number
  taxes?: number
  paymentType?: string
  paidDate?: Date
  notes?: string
  taxRate?: number
  taxStatus?: OrdersTaxStatus
  status?: OrdersStatus
  orderDetails?: OrderDetails

  static fromJson(jsonData: any) : Orders { 
    return Object.assign(new Orders(), jsonData); 
  } 
}
