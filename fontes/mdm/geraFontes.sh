#!/bin/bash
cd ..
rm -rf frontend
rm -rf backend
git clone https://github.com/JoaoVictorNobuntu/frontend
git clone https://github.com/JoaoVictorNobuntu/backend
cd backend
find . -type d -name ".git" -exec rm -rf {} +
cd ..
cd frontend
find . -type d -name ".git" -exec rm -rf {} + 
ng add @angular/material
npm install bootstrap@4.1.3 jquery@3.3.1 popper.js@1.14.3 --save 
cd src/app
ng g m core
cd core
mkdir components
cd ..
ng g m shared
cd shared
mkdir components 
mkdir model
mkdir services
cd ..
mkdir modules
cd ../../..
mkdir frontend/src/environments
mkdir frontend/src/assets/dicionario
mkdir frontend/src/assets/dicionario/menu
cd frontend
npm install
cd ..
cd frontend/src/app/modules/
ng g m employees --routing
cd employees
ng g c EmployeesForm
ng g c ListEmployees
mkdir shared
cd ..
ng g m inventoryTransactionTypes --routing
cd inventory-transaction-types
ng g c InventoryTransactionTypesForm
ng g c ListInventoryTransactionTypes
mkdir shared
cd ..
ng g m inventoryTransactions --routing
cd inventory-transactions
ng g c InventoryTransactionsForm
ng g c ListInventoryTransactions
mkdir shared
cd ..
ng g m invoices --routing
cd invoices
ng g c InvoicesForm
ng g c ListInvoices
mkdir shared
cd ..
ng g m orderDetails --routing
cd order-details
ng g c OrderDetailsForm
ng g c ListOrderDetails
mkdir shared
cd ..
ng g m orderDetailsStatus --routing
cd order-details-status
ng g c OrderDetailsStatusForm
ng g c ListOrderDetailsStatus
mkdir shared
cd ..
ng g m orders --routing
cd orders
ng g c OrdersForm
ng g c ListOrders
mkdir shared
cd ..
ng g m ordersStatus --routing
cd orders-status
ng g c OrdersStatusForm
ng g c ListOrdersStatus
mkdir shared
cd ..
ng g m ordersTaxStatus --routing
cd orders-tax-status
ng g c OrdersTaxStatusForm
ng g c ListOrdersTaxStatus
mkdir shared
cd ..
ng g m salesReports --routing
cd sales-reports
ng g c SalesReportsForm
ng g c ListSalesReports
mkdir shared
cd ..
ng g m shippers --routing
cd shippers
ng g c ShippersForm
ng g c ListShippers
mkdir shared
cd ..
ng g m products --routing
cd products
ng g c ProductsForm
ng g c ListProducts
mkdir shared
cd ..
ng g m purchaseOrderDetails --routing
cd purchase-order-details
ng g c PurchaseOrderDetailsForm
ng g c ListPurchaseOrderDetails
mkdir shared
cd ..
ng g m purchaseOrderStatus --routing
cd purchase-order-status
ng g c PurchaseOrderStatusForm
ng g c ListPurchaseOrderStatus
mkdir shared
cd ..
ng g m purchaseOrders --routing
cd purchase-orders
ng g c PurchaseOrdersForm
ng g c ListPurchaseOrders
mkdir shared
cd ..
ng g m suppliers --routing
cd suppliers
ng g c SuppliersForm
ng g c ListSuppliers
mkdir shared
cd ..
ng g m company --routing
cd company
ng g c CompanyForm
ng g c ListCompany
mkdir shared
cd ..
ng g m application --routing
cd application
ng g c ApplicationForm
ng g c ListApplication
mkdir shared
cd ..
ng g m customers --routing
cd customers
ng g c CustomersForm
ng g c ListCustomers
mkdir shared
cd ..
ng g m companyApplicationToken --routing
cd company-application-token
ng g c CompanyApplicationTokenForm
ng g c ListCompanyApplicationToken
mkdir shared
cd ..
ng g m strings --routing
cd strings
ng g c StringsForm
ng g c ListStrings
mkdir shared
cd ..
cd ../../../..
mi g app angular appModule > frontend/src/app/app.module.ts
mi g app angular appRouting > frontend/src/app/app-routing.module.ts
mi g app angular appComponentHTML > frontend/src/app/app.component.html
mi g app angular appComponentTS > frontend/src/app/app.component.ts
mi g app angular indexHTML > frontend/src/index.html
mapperidea generate app mean validator entityName=Employees > backend/src/routes/validators/employees.validator.ts
mapperidea generate app mean validator entityName=InventoryTransactionTypes > backend/src/routes/validators/inventoryTransactionTypes.validator.ts
mapperidea generate app mean validator entityName=InventoryTransactions > backend/src/routes/validators/inventoryTransactions.validator.ts
mapperidea generate app mean validator entityName=Invoices > backend/src/routes/validators/invoices.validator.ts
mapperidea generate app mean validator entityName=OrderDetails > backend/src/routes/validators/orderDetails.validator.ts
mapperidea generate app mean validator entityName=OrderDetailsStatus > backend/src/routes/validators/orderDetailsStatus.validator.ts
mapperidea generate app mean validator entityName=Orders > backend/src/routes/validators/orders.validator.ts
mapperidea generate app mean validator entityName=OrdersStatus > backend/src/routes/validators/ordersStatus.validator.ts
mapperidea generate app mean validator entityName=OrdersTaxStatus > backend/src/routes/validators/ordersTaxStatus.validator.ts
mapperidea generate app mean validator entityName=SalesReports > backend/src/routes/validators/salesReports.validator.ts
mapperidea generate app mean validator entityName=Shippers > backend/src/routes/validators/shippers.validator.ts
mapperidea generate app mean validator entityName=Products > backend/src/routes/validators/products.validator.ts
mapperidea generate app mean validator entityName=PurchaseOrderDetails > backend/src/routes/validators/purchaseOrderDetails.validator.ts
mapperidea generate app mean validator entityName=PurchaseOrderStatus > backend/src/routes/validators/purchaseOrderStatus.validator.ts
mapperidea generate app mean validator entityName=PurchaseOrders > backend/src/routes/validators/purchaseOrders.validator.ts
mapperidea generate app mean validator entityName=Suppliers > backend/src/routes/validators/suppliers.validator.ts
mapperidea generate app mean validator entityName=Company > backend/src/routes/validators/company.validator.ts
mapperidea generate app mean validator entityName=Application > backend/src/routes/validators/application.validator.ts
mapperidea generate app mean validator entityName=Customers > backend/src/routes/validators/customers.validator.ts
mapperidea generate app mean validator entityName=CompanyApplicationToken > backend/src/routes/validators/companyApplicationToken.validator.ts
mapperidea generate app mean validator entityName=Strings > backend/src/routes/validators/strings.validator.ts
mi g app json jsonClass entityName=Employees > frontend/src/assets/dicionario/employees.json
mi g app json jsonClass entityName=InventoryTransactionTypes > frontend/src/assets/dicionario/inventoryTransactionTypes.json
mi g app json jsonClass entityName=InventoryTransactions > frontend/src/assets/dicionario/inventoryTransactions.json
mi g app json jsonClass entityName=Invoices > frontend/src/assets/dicionario/invoices.json
mi g app json jsonClass entityName=OrderDetails > frontend/src/assets/dicionario/orderDetails.json
mi g app json jsonClass entityName=OrderDetailsStatus > frontend/src/assets/dicionario/orderDetailsStatus.json
mi g app json jsonClass entityName=Orders > frontend/src/assets/dicionario/orders.json
mi g app json jsonClass entityName=OrdersStatus > frontend/src/assets/dicionario/ordersStatus.json
mi g app json jsonClass entityName=OrdersTaxStatus > frontend/src/assets/dicionario/ordersTaxStatus.json
mi g app json jsonClass entityName=SalesReports > frontend/src/assets/dicionario/salesReports.json
mi g app json jsonClass entityName=Shippers > frontend/src/assets/dicionario/shippers.json
mi g app json jsonClass entityName=Products > frontend/src/assets/dicionario/products.json
mi g app json jsonClass entityName=PurchaseOrderDetails > frontend/src/assets/dicionario/purchaseOrderDetails.json
mi g app json jsonClass entityName=PurchaseOrderStatus > frontend/src/assets/dicionario/purchaseOrderStatus.json
mi g app json jsonClass entityName=PurchaseOrders > frontend/src/assets/dicionario/purchaseOrders.json
mi g app json jsonClass entityName=Suppliers > frontend/src/assets/dicionario/suppliers.json
mi g app json jsonClass entityName=Company > frontend/src/assets/dicionario/company.json
mi g app json jsonClass entityName=Application > frontend/src/assets/dicionario/application.json
mi g app json jsonClass entityName=Customers > frontend/src/assets/dicionario/customers.json
mi g app json jsonClass entityName=CompanyApplicationToken > frontend/src/assets/dicionario/companyApplicationToken.json
mi g app json jsonClass entityName=Strings > frontend/src/assets/dicionario/strings.json
mi g app json jsonClass entityName=Employees > frontend/src/assets/dicionario/employees.json
mi g app json jsonClass entityName=InventoryTransactionTypes > frontend/src/assets/dicionario/inventoryTransactionTypes.json
mi g app json jsonClass entityName=InventoryTransactions > frontend/src/assets/dicionario/inventoryTransactions.json
mi g app json jsonClass entityName=Invoices > frontend/src/assets/dicionario/invoices.json
mi g app json jsonClass entityName=OrderDetails > frontend/src/assets/dicionario/orderDetails.json
mi g app json jsonClass entityName=OrderDetailsStatus > frontend/src/assets/dicionario/orderDetailsStatus.json
mi g app json jsonClass entityName=Orders > frontend/src/assets/dicionario/orders.json
mi g app json jsonClass entityName=OrdersStatus > frontend/src/assets/dicionario/ordersStatus.json
mi g app json jsonClass entityName=OrdersTaxStatus > frontend/src/assets/dicionario/ordersTaxStatus.json
mi g app json jsonClass entityName=SalesReports > frontend/src/assets/dicionario/salesReports.json
mi g app json jsonClass entityName=Shippers > frontend/src/assets/dicionario/shippers.json
mi g app json jsonClass entityName=Products > frontend/src/assets/dicionario/products.json
mi g app json jsonClass entityName=PurchaseOrderDetails > frontend/src/assets/dicionario/purchaseOrderDetails.json
mi g app json jsonClass entityName=PurchaseOrderStatus > frontend/src/assets/dicionario/purchaseOrderStatus.json
mi g app json jsonClass entityName=PurchaseOrders > frontend/src/assets/dicionario/purchaseOrders.json
mi g app json jsonClass entityName=Suppliers > frontend/src/assets/dicionario/suppliers.json
mi g app json jsonClass entityName=Company > frontend/src/assets/dicionario/company.json
mi g app json jsonClass entityName=Application > frontend/src/assets/dicionario/application.json
mi g app json jsonClass entityName=Customers > frontend/src/assets/dicionario/customers.json
mi g app json jsonClass entityName=CompanyApplicationToken > frontend/src/assets/dicionario/companyApplicationToken.json
mi g app json jsonClass entityName=Strings > frontend/src/assets/dicionario/strings.json
mapperidea generate app mean repository entityName=Employees > backend/src/repository/employees.repository.ts
mapperidea generate app mean repository entityName=InventoryTransactionTypes > backend/src/repository/inventoryTransactionTypes.repository.ts
mapperidea generate app mean repository entityName=InventoryTransactions > backend/src/repository/inventoryTransactions.repository.ts
mapperidea generate app mean repository entityName=Invoices > backend/src/repository/invoices.repository.ts
mapperidea generate app mean repository entityName=OrderDetails > backend/src/repository/orderDetails.repository.ts
mapperidea generate app mean repository entityName=OrderDetailsStatus > backend/src/repository/orderDetailsStatus.repository.ts
mapperidea generate app mean repository entityName=Orders > backend/src/repository/orders.repository.ts
mapperidea generate app mean repository entityName=OrdersStatus > backend/src/repository/ordersStatus.repository.ts
mapperidea generate app mean repository entityName=OrdersTaxStatus > backend/src/repository/ordersTaxStatus.repository.ts
mapperidea generate app mean repository entityName=SalesReports > backend/src/repository/salesReports.repository.ts
mapperidea generate app mean repository entityName=Shippers > backend/src/repository/shippers.repository.ts
mapperidea generate app mean repository entityName=Products > backend/src/repository/products.repository.ts
mapperidea generate app mean repository entityName=PurchaseOrderDetails > backend/src/repository/purchaseOrderDetails.repository.ts
mapperidea generate app mean repository entityName=PurchaseOrderStatus > backend/src/repository/purchaseOrderStatus.repository.ts
mapperidea generate app mean repository entityName=PurchaseOrders > backend/src/repository/purchaseOrders.repository.ts
mapperidea generate app mean repository entityName=Suppliers > backend/src/repository/suppliers.repository.ts
mapperidea generate app mean repository entityName=Company > backend/src/repository/company.repository.ts
mapperidea generate app mean repository entityName=Application > backend/src/repository/application.repository.ts
mapperidea generate app mean repository entityName=Customers > backend/src/repository/customers.repository.ts
mapperidea generate app mean repository entityName=CompanyApplicationToken > backend/src/repository/companyApplicationToken.repository.ts
mapperidea generate app mean repository entityName=Strings > backend/src/repository/strings.repository.ts
mapperidea generate app mean apiService entityName=Employees > backend/src/services/employees.service.ts
mapperidea generate app mean apiService entityName=InventoryTransactionTypes > backend/src/services/inventoryTransactionTypes.service.ts
mapperidea generate app mean apiService entityName=InventoryTransactions > backend/src/services/inventoryTransactions.service.ts
mapperidea generate app mean apiService entityName=Invoices > backend/src/services/invoices.service.ts
mapperidea generate app mean apiService entityName=OrderDetails > backend/src/services/orderDetails.service.ts
mapperidea generate app mean apiService entityName=OrderDetailsStatus > backend/src/services/orderDetailsStatus.service.ts
mapperidea generate app mean apiService entityName=Orders > backend/src/services/orders.service.ts
mapperidea generate app mean apiService entityName=OrdersStatus > backend/src/services/ordersStatus.service.ts
mapperidea generate app mean apiService entityName=OrdersTaxStatus > backend/src/services/ordersTaxStatus.service.ts
mapperidea generate app mean apiService entityName=SalesReports > backend/src/services/salesReports.service.ts
mapperidea generate app mean apiService entityName=Shippers > backend/src/services/shippers.service.ts
mapperidea generate app mean apiService entityName=Products > backend/src/services/products.service.ts
mapperidea generate app mean apiService entityName=PurchaseOrderDetails > backend/src/services/purchaseOrderDetails.service.ts
mapperidea generate app mean apiService entityName=PurchaseOrderStatus > backend/src/services/purchaseOrderStatus.service.ts
mapperidea generate app mean apiService entityName=PurchaseOrders > backend/src/services/purchaseOrders.service.ts
mapperidea generate app mean apiService entityName=Suppliers > backend/src/services/suppliers.service.ts
mapperidea generate app mean apiService entityName=Company > backend/src/services/company.service.ts
mapperidea generate app mean apiService entityName=Application > backend/src/services/application.service.ts
mapperidea generate app mean apiService entityName=Customers > backend/src/services/customers.service.ts
mapperidea generate app mean apiService entityName=CompanyApplicationToken > backend/src/services/companyApplicationToken.service.ts
mapperidea generate app mean apiService entityName=Strings > backend/src/services/strings.service.ts
mapperidea generate app mean model entityName=Employees > backend/src/models/employees.model.ts
mapperidea generate app mean model entityName=InventoryTransactionTypes > backend/src/models/inventoryTransactionTypes.model.ts
mapperidea generate app mean model entityName=InventoryTransactions > backend/src/models/inventoryTransactions.model.ts
mapperidea generate app mean model entityName=Invoices > backend/src/models/invoices.model.ts
mapperidea generate app mean model entityName=OrderDetails > backend/src/models/orderDetails.model.ts
mapperidea generate app mean model entityName=OrderDetailsStatus > backend/src/models/orderDetailsStatus.model.ts
mapperidea generate app mean model entityName=Orders > backend/src/models/orders.model.ts
mapperidea generate app mean model entityName=OrdersStatus > backend/src/models/ordersStatus.model.ts
mapperidea generate app mean model entityName=OrdersTaxStatus > backend/src/models/ordersTaxStatus.model.ts
mapperidea generate app mean model entityName=SalesReports > backend/src/models/salesReports.model.ts
mapperidea generate app mean model entityName=Shippers > backend/src/models/shippers.model.ts
mapperidea generate app mean model entityName=Products > backend/src/models/products.model.ts
mapperidea generate app mean model entityName=PurchaseOrderDetails > backend/src/models/purchaseOrderDetails.model.ts
mapperidea generate app mean model entityName=PurchaseOrderStatus > backend/src/models/purchaseOrderStatus.model.ts
mapperidea generate app mean model entityName=PurchaseOrders > backend/src/models/purchaseOrders.model.ts
mapperidea generate app mean model entityName=Suppliers > backend/src/models/suppliers.model.ts
mapperidea generate app mean model entityName=Company > backend/src/models/company.model.ts
mapperidea generate app mean model entityName=Application > backend/src/models/application.model.ts
mapperidea generate app mean model entityName=Customers > backend/src/models/customers.model.ts
mapperidea generate app mean model entityName=CompanyApplicationToken > backend/src/models/companyApplicationToken.model.ts
mapperidea generate app mean model entityName=Strings > backend/src/models/strings.model.ts
mapperidea generate app mean apiController entityName=Employees > backend/src/controllers/employees.controller.ts
mapperidea generate app mean apiController entityName=InventoryTransactionTypes > backend/src/controllers/inventoryTransactionTypes.controller.ts
mapperidea generate app mean apiController entityName=InventoryTransactions > backend/src/controllers/inventoryTransactions.controller.ts
mapperidea generate app mean apiController entityName=Invoices > backend/src/controllers/invoices.controller.ts
mapperidea generate app mean apiController entityName=OrderDetails > backend/src/controllers/orderDetails.controller.ts
mapperidea generate app mean apiController entityName=OrderDetailsStatus > backend/src/controllers/orderDetailsStatus.controller.ts
mapperidea generate app mean apiController entityName=Orders > backend/src/controllers/orders.controller.ts
mapperidea generate app mean apiController entityName=OrdersStatus > backend/src/controllers/ordersStatus.controller.ts
mapperidea generate app mean apiController entityName=OrdersTaxStatus > backend/src/controllers/ordersTaxStatus.controller.ts
mapperidea generate app mean apiController entityName=SalesReports > backend/src/controllers/salesReports.controller.ts
mapperidea generate app mean apiController entityName=Shippers > backend/src/controllers/shippers.controller.ts
mapperidea generate app mean apiController entityName=Products > backend/src/controllers/products.controller.ts
mapperidea generate app mean apiController entityName=PurchaseOrderDetails > backend/src/controllers/purchaseOrderDetails.controller.ts
mapperidea generate app mean apiController entityName=PurchaseOrderStatus > backend/src/controllers/purchaseOrderStatus.controller.ts
mapperidea generate app mean apiController entityName=PurchaseOrders > backend/src/controllers/purchaseOrders.controller.ts
mapperidea generate app mean apiController entityName=Suppliers > backend/src/controllers/suppliers.controller.ts
mapperidea generate app mean apiController entityName=Company > backend/src/controllers/company.controller.ts
mapperidea generate app mean apiController entityName=Application > backend/src/controllers/application.controller.ts
mapperidea generate app mean apiController entityName=Customers > backend/src/controllers/customers.controller.ts
mapperidea generate app mean apiController entityName=CompanyApplicationToken > backend/src/controllers/companyApplicationToken.controller.ts
mapperidea generate app mean apiController entityName=Strings > backend/src/controllers/strings.controller.ts
mapperidea generate app angular model entityName=Employees > frontend/src/app/modules/employees/shared/employees.model.ts
mapperidea generate app angular model entityName=InventoryTransactionTypes > frontend/src/app/modules/inventory-transaction-types/shared/inventory-transaction-types.model.ts
mapperidea generate app angular model entityName=InventoryTransactions > frontend/src/app/modules/inventory-transactions/shared/inventory-transactions.model.ts
mapperidea generate app angular model entityName=Invoices > frontend/src/app/modules/invoices/shared/invoices.model.ts
mapperidea generate app angular model entityName=OrderDetails > frontend/src/app/modules/order-details/shared/order-details.model.ts
mapperidea generate app angular model entityName=OrderDetailsStatus > frontend/src/app/modules/order-details-status/shared/order-details-status.model.ts
mapperidea generate app angular model entityName=Orders > frontend/src/app/modules/orders/shared/orders.model.ts
mapperidea generate app angular model entityName=OrdersStatus > frontend/src/app/modules/orders-status/shared/orders-status.model.ts
mapperidea generate app angular model entityName=OrdersTaxStatus > frontend/src/app/modules/orders-tax-status/shared/orders-tax-status.model.ts
mapperidea generate app angular model entityName=SalesReports > frontend/src/app/modules/sales-reports/shared/sales-reports.model.ts
mapperidea generate app angular model entityName=Shippers > frontend/src/app/modules/shippers/shared/shippers.model.ts
mapperidea generate app angular model entityName=Products > frontend/src/app/modules/products/shared/products.model.ts
mapperidea generate app angular model entityName=PurchaseOrderDetails > frontend/src/app/modules/purchase-order-details/shared/purchase-order-details.model.ts
mapperidea generate app angular model entityName=PurchaseOrderStatus > frontend/src/app/modules/purchase-order-status/shared/purchase-order-status.model.ts
mapperidea generate app angular model entityName=PurchaseOrders > frontend/src/app/modules/purchase-orders/shared/purchase-orders.model.ts
mapperidea generate app angular model entityName=Suppliers > frontend/src/app/modules/suppliers/shared/suppliers.model.ts
mapperidea generate app angular model entityName=Company > frontend/src/app/modules/company/shared/company.model.ts
mapperidea generate app angular model entityName=Application > frontend/src/app/modules/application/shared/application.model.ts
mapperidea generate app angular model entityName=Customers > frontend/src/app/modules/customers/shared/customers.model.ts
mapperidea generate app angular model entityName=CompanyApplicationToken > frontend/src/app/modules/company-application-token/shared/company-application-token.model.ts
mapperidea generate app angular model entityName=Strings > frontend/src/app/modules/strings/shared/strings.model.ts
mi g app angular dataService entityName=Employees > frontend/src/app/modules/employees/shared/employees.service.ts
mi g app angular dataService entityName=InventoryTransactionTypes > frontend/src/app/modules/inventory-transaction-types/shared/inventory-transaction-types.service.ts
mi g app angular dataService entityName=InventoryTransactions > frontend/src/app/modules/inventory-transactions/shared/inventory-transactions.service.ts
mi g app angular dataService entityName=Invoices > frontend/src/app/modules/invoices/shared/invoices.service.ts
mi g app angular dataService entityName=OrderDetails > frontend/src/app/modules/order-details/shared/order-details.service.ts
mi g app angular dataService entityName=OrderDetailsStatus > frontend/src/app/modules/order-details-status/shared/order-details-status.service.ts
mi g app angular dataService entityName=Orders > frontend/src/app/modules/orders/shared/orders.service.ts
mi g app angular dataService entityName=OrdersStatus > frontend/src/app/modules/orders-status/shared/orders-status.service.ts
mi g app angular dataService entityName=OrdersTaxStatus > frontend/src/app/modules/orders-tax-status/shared/orders-tax-status.service.ts
mi g app angular dataService entityName=SalesReports > frontend/src/app/modules/sales-reports/shared/sales-reports.service.ts
mi g app angular dataService entityName=Shippers > frontend/src/app/modules/shippers/shared/shippers.service.ts
mi g app angular dataService entityName=Products > frontend/src/app/modules/products/shared/products.service.ts
mi g app angular dataService entityName=PurchaseOrderDetails > frontend/src/app/modules/purchase-order-details/shared/purchase-order-details.service.ts
mi g app angular dataService entityName=PurchaseOrderStatus > frontend/src/app/modules/purchase-order-status/shared/purchase-order-status.service.ts
mi g app angular dataService entityName=PurchaseOrders > frontend/src/app/modules/purchase-orders/shared/purchase-orders.service.ts
mi g app angular dataService entityName=Suppliers > frontend/src/app/modules/suppliers/shared/suppliers.service.ts
mi g app angular dataService entityName=Company > frontend/src/app/modules/company/shared/company.service.ts
mi g app angular dataService entityName=Application > frontend/src/app/modules/application/shared/application.service.ts
mi g app angular dataService entityName=Customers > frontend/src/app/modules/customers/shared/customers.service.ts
mi g app angular dataService entityName=CompanyApplicationToken > frontend/src/app/modules/company-application-token/shared/company-application-token.service.ts
mi g app angular dataService entityName=Strings > frontend/src/app/modules/strings/shared/strings.service.ts
mi g app angular appRoutingChild entityName=Employees > frontend/src/app/modules/employees/employees-routing.module.ts
mi g app angular appRoutingChild entityName=InventoryTransactionTypes > frontend/src/app/modules/inventory-transaction-types/inventory-transaction-types-routing.module.ts
mi g app angular appRoutingChild entityName=InventoryTransactions > frontend/src/app/modules/inventory-transactions/inventory-transactions-routing.module.ts
mi g app angular appRoutingChild entityName=Invoices > frontend/src/app/modules/invoices/invoices-routing.module.ts
mi g app angular appRoutingChild entityName=OrderDetails > frontend/src/app/modules/order-details/order-details-routing.module.ts
mi g app angular appRoutingChild entityName=OrderDetailsStatus > frontend/src/app/modules/order-details-status/order-details-status-routing.module.ts
mi g app angular appRoutingChild entityName=Orders > frontend/src/app/modules/orders/orders-routing.module.ts
mi g app angular appRoutingChild entityName=OrdersStatus > frontend/src/app/modules/orders-status/orders-status-routing.module.ts
mi g app angular appRoutingChild entityName=OrdersTaxStatus > frontend/src/app/modules/orders-tax-status/orders-tax-status-routing.module.ts
mi g app angular appRoutingChild entityName=SalesReports > frontend/src/app/modules/sales-reports/sales-reports-routing.module.ts
mi g app angular appRoutingChild entityName=Shippers > frontend/src/app/modules/shippers/shippers-routing.module.ts
mi g app angular appRoutingChild entityName=Products > frontend/src/app/modules/products/products-routing.module.ts
mi g app angular appRoutingChild entityName=PurchaseOrderDetails > frontend/src/app/modules/purchase-order-details/purchase-order-details-routing.module.ts
mi g app angular appRoutingChild entityName=PurchaseOrderStatus > frontend/src/app/modules/purchase-order-status/purchase-order-status-routing.module.ts
mi g app angular appRoutingChild entityName=PurchaseOrders > frontend/src/app/modules/purchase-orders/purchase-orders-routing.module.ts
mi g app angular appRoutingChild entityName=Suppliers > frontend/src/app/modules/suppliers/suppliers-routing.module.ts
mi g app angular appRoutingChild entityName=Company > frontend/src/app/modules/company/company-routing.module.ts
mi g app angular appRoutingChild entityName=Application > frontend/src/app/modules/application/application-routing.module.ts
mi g app angular appRoutingChild entityName=Customers > frontend/src/app/modules/customers/customers-routing.module.ts
mi g app angular appRoutingChild entityName=CompanyApplicationToken > frontend/src/app/modules/company-application-token/company-application-token-routing.module.ts
mi g app angular appRoutingChild entityName=Strings > frontend/src/app/modules/strings/strings-routing.module.ts
mi g app mean routes entityName=Employees > backend/src/routes/employees.route.ts
mi g app mean routes entityName=InventoryTransactionTypes > backend/src/routes/inventoryTransactionTypes.route.ts
mi g app mean routes entityName=InventoryTransactions > backend/src/routes/inventoryTransactions.route.ts
mi g app mean routes entityName=Invoices > backend/src/routes/invoices.route.ts
mi g app mean routes entityName=OrderDetails > backend/src/routes/orderDetails.route.ts
mi g app mean routes entityName=OrderDetailsStatus > backend/src/routes/orderDetailsStatus.route.ts
mi g app mean routes entityName=Orders > backend/src/routes/orders.route.ts
mi g app mean routes entityName=OrdersStatus > backend/src/routes/ordersStatus.route.ts
mi g app mean routes entityName=OrdersTaxStatus > backend/src/routes/ordersTaxStatus.route.ts
mi g app mean routes entityName=SalesReports > backend/src/routes/salesReports.route.ts
mi g app mean routes entityName=Shippers > backend/src/routes/shippers.route.ts
mi g app mean routes entityName=Products > backend/src/routes/products.route.ts
mi g app mean routes entityName=PurchaseOrderDetails > backend/src/routes/purchaseOrderDetails.route.ts
mi g app mean routes entityName=PurchaseOrderStatus > backend/src/routes/purchaseOrderStatus.route.ts
mi g app mean routes entityName=PurchaseOrders > backend/src/routes/purchaseOrders.route.ts
mi g app mean routes entityName=Suppliers > backend/src/routes/suppliers.route.ts
mi g app mean routes entityName=Company > backend/src/routes/company.route.ts
mi g app mean routes entityName=Application > backend/src/routes/application.route.ts
mi g app mean routes entityName=Customers > backend/src/routes/customers.route.ts
mi g app mean routes entityName=CompanyApplicationToken > backend/src/routes/companyApplicationToken.route.ts
mi g app mean routes entityName=Strings > backend/src/routes/strings.route.ts
mi g app angular listComponentHTML listName=Employees >  frontend/src/app/modules/employees/list-employees/list-employees.component.html
mi g app angular listComponentTS listName=Employees >  frontend/src/app/modules/employees/list-employees/list-employees.component.ts
mi g app angular detailsComponentHTML editorName=Employees >  frontend/src/app/modules/employees/employees-form/employees-form.component.html
mi g app angular detailsComponentTS editorName=Employees >  frontend/src/app/modules/employees/employees-form/employees-form.component.ts
mi g app angular listComponentHTML listName=InventoryTransactionTypes >  frontend/src/app/modules/inventory-transaction-types/list-inventory-transaction-types/list-inventory-transaction-types.component.html
mi g app angular listComponentTS listName=InventoryTransactionTypes >  frontend/src/app/modules/inventory-transaction-types/list-inventory-transaction-types/list-inventory-transaction-types.component.ts
mi g app angular detailsComponentHTML editorName=InventoryTransactionTypes >  frontend/src/app/modules/inventory-transaction-types/inventory-transaction-types-form/inventory-transaction-types-form.component.html
mi g app angular detailsComponentTS editorName=InventoryTransactionTypes >  frontend/src/app/modules/inventory-transaction-types/inventory-transaction-types-form/inventory-transaction-types-form.component.ts
mi g app angular listComponentHTML listName=InventoryTransactions >  frontend/src/app/modules/inventory-transactions/list-inventory-transactions/list-inventory-transactions.component.html
mi g app angular listComponentTS listName=InventoryTransactions >  frontend/src/app/modules/inventory-transactions/list-inventory-transactions/list-inventory-transactions.component.ts
mi g app angular detailsComponentHTML editorName=InventoryTransactions >  frontend/src/app/modules/inventory-transactions/inventory-transactions-form/inventory-transactions-form.component.html
mi g app angular detailsComponentTS editorName=InventoryTransactions >  frontend/src/app/modules/inventory-transactions/inventory-transactions-form/inventory-transactions-form.component.ts
mi g app angular listComponentHTML listName=Invoices >  frontend/src/app/modules/invoices/list-invoices/list-invoices.component.html
mi g app angular listComponentTS listName=Invoices >  frontend/src/app/modules/invoices/list-invoices/list-invoices.component.ts
mi g app angular detailsComponentHTML editorName=Invoices >  frontend/src/app/modules/invoices/invoices-form/invoices-form.component.html
mi g app angular detailsComponentTS editorName=Invoices >  frontend/src/app/modules/invoices/invoices-form/invoices-form.component.ts
mi g app angular listComponentHTML listName=OrderDetails >  frontend/src/app/modules/order-details/list-order-details/list-order-details.component.html
mi g app angular listComponentTS listName=OrderDetails >  frontend/src/app/modules/order-details/list-order-details/list-order-details.component.ts
mi g app angular detailsComponentHTML editorName=OrderDetails >  frontend/src/app/modules/order-details/order-details-form/order-details-form.component.html
mi g app angular detailsComponentTS editorName=OrderDetails >  frontend/src/app/modules/order-details/order-details-form/order-details-form.component.ts
mi g app angular listComponentHTML listName=OrderDetailsStatus >  frontend/src/app/modules/order-details-status/list-order-details-status/list-order-details-status.component.html
mi g app angular listComponentTS listName=OrderDetailsStatus >  frontend/src/app/modules/order-details-status/list-order-details-status/list-order-details-status.component.ts
mi g app angular detailsComponentHTML editorName=OrderDetailsStatus >  frontend/src/app/modules/order-details-status/order-details-status-form/order-details-status-form.component.html
mi g app angular detailsComponentTS editorName=OrderDetailsStatus >  frontend/src/app/modules/order-details-status/order-details-status-form/order-details-status-form.component.ts
mi g app angular listComponentHTML listName=Orders >  frontend/src/app/modules/orders/list-orders/list-orders.component.html
mi g app angular listComponentTS listName=Orders >  frontend/src/app/modules/orders/list-orders/list-orders.component.ts
mi g app angular detailsComponentHTML editorName=Orders >  frontend/src/app/modules/orders/orders-form/orders-form.component.html
mi g app angular detailsComponentTS editorName=Orders >  frontend/src/app/modules/orders/orders-form/orders-form.component.ts
mi g app angular listComponentHTML listName=OrdersStatus >  frontend/src/app/modules/orders-status/list-orders-status/list-orders-status.component.html
mi g app angular listComponentTS listName=OrdersStatus >  frontend/src/app/modules/orders-status/list-orders-status/list-orders-status.component.ts
mi g app angular detailsComponentHTML editorName=OrdersStatus >  frontend/src/app/modules/orders-status/orders-status-form/orders-status-form.component.html
mi g app angular detailsComponentTS editorName=OrdersStatus >  frontend/src/app/modules/orders-status/orders-status-form/orders-status-form.component.ts
mi g app angular listComponentHTML listName=OrdersTaxStatus >  frontend/src/app/modules/orders-tax-status/list-orders-tax-status/list-orders-tax-status.component.html
mi g app angular listComponentTS listName=OrdersTaxStatus >  frontend/src/app/modules/orders-tax-status/list-orders-tax-status/list-orders-tax-status.component.ts
mi g app angular detailsComponentHTML editorName=OrdersTaxStatus >  frontend/src/app/modules/orders-tax-status/orders-tax-status-form/orders-tax-status-form.component.html
mi g app angular detailsComponentTS editorName=OrdersTaxStatus >  frontend/src/app/modules/orders-tax-status/orders-tax-status-form/orders-tax-status-form.component.ts
mi g app angular listComponentHTML listName=SalesReports >  frontend/src/app/modules/sales-reports/list-sales-reports/list-sales-reports.component.html
mi g app angular listComponentTS listName=SalesReports >  frontend/src/app/modules/sales-reports/list-sales-reports/list-sales-reports.component.ts
mi g app angular detailsComponentHTML editorName=SalesReports >  frontend/src/app/modules/sales-reports/sales-reports-form/sales-reports-form.component.html
mi g app angular detailsComponentTS editorName=SalesReports >  frontend/src/app/modules/sales-reports/sales-reports-form/sales-reports-form.component.ts
mi g app angular listComponentHTML listName=Shippers >  frontend/src/app/modules/shippers/list-shippers/list-shippers.component.html
mi g app angular listComponentTS listName=Shippers >  frontend/src/app/modules/shippers/list-shippers/list-shippers.component.ts
mi g app angular detailsComponentHTML editorName=Shippers >  frontend/src/app/modules/shippers/shippers-form/shippers-form.component.html
mi g app angular detailsComponentTS editorName=Shippers >  frontend/src/app/modules/shippers/shippers-form/shippers-form.component.ts
mi g app angular listComponentHTML listName=Products >  frontend/src/app/modules/products/list-products/list-products.component.html
mi g app angular listComponentTS listName=Products >  frontend/src/app/modules/products/list-products/list-products.component.ts
mi g app angular detailsComponentHTML editorName=Products >  frontend/src/app/modules/products/products-form/products-form.component.html
mi g app angular detailsComponentTS editorName=Products >  frontend/src/app/modules/products/products-form/products-form.component.ts
mi g app angular listComponentHTML listName=PurchaseOrderDetails >  frontend/src/app/modules/purchase-order-details/list-purchase-order-details/list-purchase-order-details.component.html
mi g app angular listComponentTS listName=PurchaseOrderDetails >  frontend/src/app/modules/purchase-order-details/list-purchase-order-details/list-purchase-order-details.component.ts
mi g app angular detailsComponentHTML editorName=PurchaseOrderDetails >  frontend/src/app/modules/purchase-order-details/purchase-order-details-form/purchase-order-details-form.component.html
mi g app angular detailsComponentTS editorName=PurchaseOrderDetails >  frontend/src/app/modules/purchase-order-details/purchase-order-details-form/purchase-order-details-form.component.ts
mi g app angular listComponentHTML listName=PurchaseOrderStatus >  frontend/src/app/modules/purchase-order-status/list-purchase-order-status/list-purchase-order-status.component.html
mi g app angular listComponentTS listName=PurchaseOrderStatus >  frontend/src/app/modules/purchase-order-status/list-purchase-order-status/list-purchase-order-status.component.ts
mi g app angular detailsComponentHTML editorName=PurchaseOrderStatus >  frontend/src/app/modules/purchase-order-status/purchase-order-status-form/purchase-order-status-form.component.html
mi g app angular detailsComponentTS editorName=PurchaseOrderStatus >  frontend/src/app/modules/purchase-order-status/purchase-order-status-form/purchase-order-status-form.component.ts
mi g app angular listComponentHTML listName=PurchaseOrders >  frontend/src/app/modules/purchase-orders/list-purchase-orders/list-purchase-orders.component.html
mi g app angular listComponentTS listName=PurchaseOrders >  frontend/src/app/modules/purchase-orders/list-purchase-orders/list-purchase-orders.component.ts
mi g app angular detailsComponentHTML editorName=PurchaseOrders >  frontend/src/app/modules/purchase-orders/purchase-orders-form/purchase-orders-form.component.html
mi g app angular detailsComponentTS editorName=PurchaseOrders >  frontend/src/app/modules/purchase-orders/purchase-orders-form/purchase-orders-form.component.ts
mi g app angular listComponentHTML listName=Suppliers >  frontend/src/app/modules/suppliers/list-suppliers/list-suppliers.component.html
mi g app angular listComponentTS listName=Suppliers >  frontend/src/app/modules/suppliers/list-suppliers/list-suppliers.component.ts
mi g app angular detailsComponentHTML editorName=Suppliers >  frontend/src/app/modules/suppliers/suppliers-form/suppliers-form.component.html
mi g app angular detailsComponentTS editorName=Suppliers >  frontend/src/app/modules/suppliers/suppliers-form/suppliers-form.component.ts
mi g app angular listComponentHTML listName=Company >  frontend/src/app/modules/company/list-company/list-company.component.html
mi g app angular listComponentTS listName=Company >  frontend/src/app/modules/company/list-company/list-company.component.ts
mi g app angular detailsComponentHTML editorName=Company >  frontend/src/app/modules/company/company-form/company-form.component.html
mi g app angular detailsComponentTS editorName=Company >  frontend/src/app/modules/company/company-form/company-form.component.ts
mi g app angular listComponentHTML listName=Application >  frontend/src/app/modules/application/list-application/list-application.component.html
mi g app angular listComponentTS listName=Application >  frontend/src/app/modules/application/list-application/list-application.component.ts
mi g app angular detailsComponentHTML editorName=Application >  frontend/src/app/modules/application/application-form/application-form.component.html
mi g app angular detailsComponentTS editorName=Application >  frontend/src/app/modules/application/application-form/application-form.component.ts
mi g app angular listComponentHTML listName=Customers >  frontend/src/app/modules/customers/list-customers/list-customers.component.html
mi g app angular listComponentTS listName=Customers >  frontend/src/app/modules/customers/list-customers/list-customers.component.ts
mi g app angular detailsComponentHTML editorName=Customers >  frontend/src/app/modules/customers/customers-form/customers-form.component.html
mi g app angular detailsComponentTS editorName=Customers >  frontend/src/app/modules/customers/customers-form/customers-form.component.ts
mi g app angular listComponentHTML listName=CompanyApplicationToken >  frontend/src/app/modules/company-application-token/list-company-application-token/list-company-application-token.component.html
mi g app angular listComponentTS listName=CompanyApplicationToken >  frontend/src/app/modules/company-application-token/list-company-application-token/list-company-application-token.component.ts
mi g app angular detailsComponentHTML editorName=CompanyApplicationToken >  frontend/src/app/modules/company-application-token/company-application-token-form/company-application-token-form.component.html
mi g app angular detailsComponentTS editorName=CompanyApplicationToken >  frontend/src/app/modules/company-application-token/company-application-token-form/company-application-token-form.component.ts
mi g app angular listComponentHTML listName=Strings >  frontend/src/app/modules/strings/list-strings/list-strings.component.html
mi g app angular listComponentTS listName=Strings >  frontend/src/app/modules/strings/list-strings/list-strings.component.ts
mi g app angular detailsComponentHTML editorName=Strings >  frontend/src/app/modules/strings/strings-form/strings-form.component.html
mi g app angular detailsComponentTS editorName=Strings >  frontend/src/app/modules/strings/strings-form/strings-form.component.ts
mi g app json jsonClass entityName=Employees > frontend/src/assets/dicionario/employees.json
mi g app json jsonClass entityName=InventoryTransactionTypes > frontend/src/assets/dicionario/inventoryTransactionTypes.json
mi g app json jsonClass entityName=InventoryTransactions > frontend/src/assets/dicionario/inventoryTransactions.json
mi g app json jsonClass entityName=Invoices > frontend/src/assets/dicionario/invoices.json
mi g app json jsonClass entityName=OrderDetails > frontend/src/assets/dicionario/orderDetails.json
mi g app json jsonClass entityName=OrderDetailsStatus > frontend/src/assets/dicionario/orderDetailsStatus.json
mi g app json jsonClass entityName=Orders > frontend/src/assets/dicionario/orders.json
mi g app json jsonClass entityName=OrdersStatus > frontend/src/assets/dicionario/ordersStatus.json
mi g app json jsonClass entityName=OrdersTaxStatus > frontend/src/assets/dicionario/ordersTaxStatus.json
mi g app json jsonClass entityName=SalesReports > frontend/src/assets/dicionario/salesReports.json
mi g app json jsonClass entityName=Shippers > frontend/src/assets/dicionario/shippers.json
mi g app json jsonClass entityName=Products > frontend/src/assets/dicionario/products.json
mi g app json jsonClass entityName=PurchaseOrderDetails > frontend/src/assets/dicionario/purchaseOrderDetails.json
mi g app json jsonClass entityName=PurchaseOrderStatus > frontend/src/assets/dicionario/purchaseOrderStatus.json
mi g app json jsonClass entityName=PurchaseOrders > frontend/src/assets/dicionario/purchaseOrders.json
mi g app json jsonClass entityName=Suppliers > frontend/src/assets/dicionario/suppliers.json
mi g app json jsonClass entityName=Company > frontend/src/assets/dicionario/company.json
mi g app json jsonClass entityName=Application > frontend/src/assets/dicionario/application.json
mi g app json jsonClass entityName=Customers > frontend/src/assets/dicionario/customers.json
mi g app json jsonClass entityName=CompanyApplicationToken > frontend/src/assets/dicionario/companyApplicationToken.json
mi g app json jsonClass entityName=Strings > frontend/src/assets/dicionario/strings.json
mi g app json jsonTransloco translate=en > frontend/src/assets/i18n/en.json
mi g app json jsonTransloco translate=pt > frontend/src/assets/i18n/pt.json
mi g app angular environment > frontend/src/environments/environment.ts
mi g app angular environment > frontend/src/environments/environment.development.ts
mi g app json jsonMenu > frontend/src/assets/dicionario/menu/menu.json
mi g app mean envBackend > backend/.env
echo -e "\n\nQual o nome da sua Branch\n"
read nomeFeature
git flow feature start $nomeFeature
git add --all
echo -e "\n\nQual o comentario do seu commit?\n"
read commit
git commit -m "$commit"
git status
git push --set-upstream origin feature/$nomeFeature
