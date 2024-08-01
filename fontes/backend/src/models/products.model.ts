interface IProducts { 
  supplierIds?: string,
  productCode?: string,
  productName?: string,
  description?: string,
  standardCost?: number,
  listPrice?: number,
  reorderLevel?: number,
  targetLevel?: number,
  quantityPerUnit?: string,
  discontinued?: boolean,
  minimumReorderQuantity?: number,
  category?: string,
  attachments?: string,
  defaultDiscount?: number
} 
export class Products extends BaseResourceModel implements IProducts{ 
  supplierIds?: string,
  productCode?: string,
  productName?: string,
  description?: string,
  standardCost?: number,
  listPrice?: number,
  reorderLevel?: number,
  targetLevel?: number,
  quantityPerUnit?: string,
  discontinued?: boolean,
  minimumReorderQuantity?: number,
  category?: string,
  attachments?: string,
  defaultDiscount?: number

  static fromJson(jsonData: any) : Products { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
