import { Application } from 'express';
import userRoutes from './user.route';
import tenantRoutes from './tenant.route';
import roleRoutes from './role.route';
import tenantCredentialRoutes from './tenantCredential.route';
import employeesRoutes from "./employees.route"; 
import inventoryTransactionTypesRoutes from "./inventoryTransactionTypes.route"; 
import inventoryTransactionsRoutes from "./inventoryTransactions.route"; 
import invoicesRoutes from "./invoices.route"; 
import orderDetailsRoutes from "./orderDetails.route"; 
import orderDetailsStatusRoutes from "./orderDetailsStatus.route"; 
import ordersRoutes from "./orders.route"; 
import ordersStatusRoutes from "./ordersStatus.route"; 
import ordersTaxStatusRoutes from "./ordersTaxStatus.route"; 
import salesReportsRoutes from "./salesReports.route"; 
import shippersRoutes from "./shippers.route"; 
import productsRoutes from "./products.route"; 
import purchaseOrderDetailsRoutes from "./purchaseOrderDetails.route"; 
import purchaseOrderStatusRoutes from "./purchaseOrderStatus.route"; 
import purchaseOrdersRoutes from "./purchaseOrders.route"; 
import suppliersRoutes from "./suppliers.route"; 
import companyRoutes from "./company.route"; 
import applicationRoutes from "./application.route"; 
import customersRoutes from "./customers.route"; 
/** 
 * Define as rotas da aplicação 
 * @param app Instância do aplicação Express 
 */ 
export function setRoutes(app: Application) { 

  roleRoutes(app); 
  userRoutes(app); 
  tenantCredentialRoutes(app); 
  tenantRoutes(app); 

  employeesRoutes(app); 

  inventoryTransactionTypesRoutes(app); 

  inventoryTransactionsRoutes(app); 

  invoicesRoutes(app); 

  orderDetailsRoutes(app); 

  orderDetailsStatusRoutes(app); 

  ordersRoutes(app); 

  ordersStatusRoutes(app); 

  ordersTaxStatusRoutes(app); 

  salesReportsRoutes(app); 

  shippersRoutes(app); 

  productsRoutes(app); 

  purchaseOrderDetailsRoutes(app); 

  purchaseOrderStatusRoutes(app); 

  purchaseOrdersRoutes(app); 

  suppliersRoutes(app); 

  companyRoutes(app); 

  applicationRoutes(app); 

  customersRoutes(app); 

}
