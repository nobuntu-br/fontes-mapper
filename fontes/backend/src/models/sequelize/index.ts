import { ModelStatic, Sequelize } from "sequelize"; 
import userModel from "./user.model";
import roleModel from "./role.model";
import userRoleModel from "./userRole.model";
import functionSystemModel from "./functionSystem.model";
import functionSystemRoleModel from "./functionSystemRole.model";
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

export default async function setModels(sequelize: Sequelize) { 

  const user = userModel(sequelize); 
  const role = roleModel(sequelize); 
  const userRole = userRoleModel(sequelize); 
  const functionSystem = functionSystemModel(sequelize); 
  const functionSystemRole = functionSystemRoleModel(sequelize); 
  const componentStructure = componentStructureModel(sequelize); 
  const componentStructureRole = componentStructureRoleModel(sequelize); 

  //Relação de muitos pra muitos de User para Role 
  user.belongsToMany(role, {through: userRole}); 
  role.belongsToMany(user, {through: userRole}); 

  //Relação de muitos pra muitos entre Role e FunctionsSystem 
  role.belongsToMany(functionSystem, { through: functionSystemRole }); 
  functionSystem.belongsToMany(role, { through: functionSystemRole }); 
  //Relação de muitos para muitos entre ComponentStructure e Role 
  componentStructure.belongsToMany(role, {through: componentStructureRole}); 
  role.belongsToMany(componentStructure, {through: componentStructureRole}); 

  const employees = employeesModel(sequelize); 


  const inventoryTransactionTypes = inventoryTransactionTypesModel(sequelize); 


  const inventoryTransactions = inventoryTransactionsModel(sequelize); 


  const invoices = invoicesModel(sequelize); 


  const orderDetails = orderDetailsModel(sequelize); 


  const orderDetailsStatus = orderDetailsStatusModel(sequelize); 


  const orders = ordersModel(sequelize); 


  const ordersStatus = ordersStatusModel(sequelize); 


  const ordersTaxStatus = ordersTaxStatusModel(sequelize); 


  const salesReports = salesReportsModel(sequelize); 


  const shippers = shippersModel(sequelize); 


  const products = productsModel(sequelize); 


  const purchaseOrderDetails = purchaseOrderDetailsModel(sequelize); 


  const purchaseOrderStatus = purchaseOrderStatusModel(sequelize); 


  const purchaseOrders = purchaseOrdersModel(sequelize); 


  const suppliers = suppliersModel(sequelize); 


  const company = companyModel(sequelize); 


  const application = applicationModel(sequelize); 


  const customers = customersModel(sequelize); 


  inventoryTransactions.hasOne(inventoryTransactionTypes, {as: 'transactionType' }); 
  inventoryTransactionTypes.belongsTo(inventoryTransactions); 

  inventoryTransactions.hasOne(products, {as: 'product' }); 
  products.belongsTo(inventoryTransactions); 

  inventoryTransactions.hasOne(purchaseOrders, {as: 'purchaseOrder' }); 
  purchaseOrders.belongsTo(inventoryTransactions); 

  inventoryTransactions.hasOne(orders, {as: 'customerOrder' }); 
  orders.belongsTo(inventoryTransactions); 

  invoices.hasOne(orders, {as: 'order' }); 
  orders.belongsTo(invoices); 

  orderDetails.hasOne(orders, {as: 'order' }); 
  orders.belongsTo(orderDetails); 

  orderDetails.hasOne(products, {as: 'product' }); 
  products.belongsTo(orderDetails); 

  orderDetails.hasOne(orderDetailsStatus, {as: 'status' }); 
  orderDetailsStatus.belongsTo(orderDetails); 

  orders.hasOne(employees, {as: 'employee' }); 
  employees.belongsTo(orders); 

  orders.hasOne(customers, {as: 'customer' }); 
  customers.belongsTo(orders); 

  orders.hasOne(shippers, {as: 'shipper' }); 
  shippers.belongsTo(orders); 

  orders.hasOne(ordersTaxStatus, {as: 'taxStatus' }); 
  ordersTaxStatus.belongsTo(orders); 

  orders.hasOne(ordersStatus, {as: 'status' }); 
  ordersStatus.belongsTo(orders); 

  orders.hasMany(orderDetails, {as: 'orderDetails' }); 
  orderDetails.belongsTo(orders); 

  purchaseOrderDetails.hasOne(purchaseOrders, {as: 'purchaseOrder' }); 
  purchaseOrders.belongsTo(purchaseOrderDetails); 

  purchaseOrderDetails.hasOne(products, {as: 'product' }); 
  products.belongsTo(purchaseOrderDetails); 

  purchaseOrderDetails.hasOne(inventoryTransactions, {as: 'inventory' }); 
  inventoryTransactions.belongsTo(purchaseOrderDetails); 

  purchaseOrders.hasOne(suppliers, {as: 'supplier' }); 
  suppliers.belongsTo(purchaseOrders); 

  purchaseOrders.hasOne(employees, {as: 'createdBy' }); 
  employees.belongsTo(purchaseOrders); 

  purchaseOrders.hasOne(purchaseOrderStatus, {as: 'status' }); 
  purchaseOrderStatus.belongsTo(purchaseOrders); 

  purchaseOrders.hasOne(purchaseOrderDetails, {as: 'purchaseOrderDetails' }); 
  purchaseOrderDetails.belongsTo(purchaseOrders); 

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
