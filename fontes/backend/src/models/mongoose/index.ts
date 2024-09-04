import { Mongoose } from "mongoose"; 
import userModel from "./user.model";
import roleModel from "./role.model";
import orderModel from "./order.model";
import functionSystemModel from "./functionSystem.model";
import functionSystemRoleModel from "./functionSystemRole.model";
import userRoleModel from "./userRole.model";
import componentStructureModel from "./componentStructure.model";
import componentStructureRoleModel from "./componentStructureRole.model";

import employeesModel from "./employees.model"; 
import inventoryTransactionTypesModel from "./inventoryTransactionTypes.model"; 
import inventoryTransactionsModel from "./inventoryTransactions.model"; 
import invoicesModel from "./invoices.model"; 
import orderDetailsModel from "./orderDetails.model"; 
import orderDetailsStatusModel from "./orderDetailsStatus.model"; 
import ordersModel from "./orders.model"; 
import ordersStatusModel from "./ordersStatus.model"; 
import ordersTaxStatusModel from "./ordersTaxStatus.model"; 
import salesReportsModel from "./salesReports.model"; 
import shippersModel from "./shippers.model"; 
import productsModel from "./products.model"; 
import purchaseOrderDetailsModel from "./purchaseOrderDetails.model"; 
import purchaseOrderStatusModel from "./purchaseOrderStatus.model"; 
import purchaseOrdersModel from "./purchaseOrders.model"; 
import suppliersModel from "./suppliers.model"; 
import companyModel from "./company.model"; 
import applicationModel from "./application.model"; 
import customersModel from "./customers.model"; 

export default async function setModels(mongooseConnection: Mongoose) { 

  const user = userModel(mongooseConnection); 
  const role = roleModel(mongooseConnection); 
  const userRole = userRoleModel(mongooseConnection); 
  const functionSystem = functionSystemModel(mongooseConnection); 
  const functionSystemRole = functionSystemRoleModel(mongooseConnection); 
  const componentStructure = componentStructureModel(mongooseConnection); 
  const componentStructureRole = componentStructureRoleModel(mongooseConnection); 


  const employees = employeesModel(mongooseConnection); 


  const inventoryTransactionTypes = inventoryTransactionTypesModel(mongooseConnection); 


  const inventoryTransactions = inventoryTransactionsModel(mongooseConnection); 


  const invoices = invoicesModel(mongooseConnection); 


  const orderDetails = orderDetailsModel(mongooseConnection); 


  const orderDetailsStatus = orderDetailsStatusModel(mongooseConnection); 


  const orders = ordersModel(mongooseConnection); 


  const ordersStatus = ordersStatusModel(mongooseConnection); 


  const ordersTaxStatus = ordersTaxStatusModel(mongooseConnection); 


  const salesReports = salesReportsModel(mongooseConnection); 


  const shippers = shippersModel(mongooseConnection); 


  const products = productsModel(mongooseConnection); 


  const purchaseOrderDetails = purchaseOrderDetailsModel(mongooseConnection); 


  const purchaseOrderStatus = purchaseOrderStatusModel(mongooseConnection); 


  const purchaseOrders = purchaseOrdersModel(mongooseConnection); 


  const suppliers = suppliersModel(mongooseConnection); 


  const company = companyModel(mongooseConnection); 


  const application = applicationModel(mongooseConnection); 


  const customers = customersModel(mongooseConnection); 


  const models = { 
    user, 
    role, 
    userRole, 
    functionSystem, 
    functionSystemRole, 
    componentStructure, 
    componentStructureRole, 
    employees,
    inventoryTransactionTypes,
    inventoryTransactions,
    invoices,
    orderDetails,
    orderDetailsStatus,
    orders,
    ordersStatus,
    ordersTaxStatus,
    salesReports,
    shippers,
    products,
    purchaseOrderDetails,
    purchaseOrderStatus,
    purchaseOrders,
    suppliers,
    company,
    application,
    customers,
  } 


  return models; 
} 
