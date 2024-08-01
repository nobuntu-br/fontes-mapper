import { Orders } from "./order.model"; 
interface IInvoices { 
  order?: Orders,
  invoiceDate?: Date,
  dueDate?: Date,
  tax?: number,
  shipping?: number,
  amountDue?: number
} 
export class Invoices extends BaseResourceModel implements IInvoices{ 
  order?: Orders,
  invoiceDate?: Date,
  dueDate?: Date,
  tax?: number,
  shipping?: number,
  amountDue?: number

  static fromJson(jsonData: any) : Invoices { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
