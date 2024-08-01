interface IOrdersStatus { 
  statusName?: string
} 
export class OrdersStatus extends BaseResourceModel implements IOrdersStatus{ 
  statusName?: string

  static fromJson(jsonData: any) : OrdersStatus { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
