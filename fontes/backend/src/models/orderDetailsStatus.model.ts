interface IOrderDetailsStatus { 
  statusName?: string
} 
export class OrderDetailsStatus extends BaseResourceModel implements IOrderDetailsStatus{ 
  statusName?: string

  static fromJson(jsonData: any) : OrderDetailsStatus { 
    return Object.assign(new UserTenant(), jsonData); 
  } 
