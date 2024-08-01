import { BaseResourceModel } from "./base-resource.model";

interface IUserTenant {
  userId?: string;
  tenantId?: string;
  tenantCredentialId?: string;
  isAdmin?: boolean;
}

export class UserTenant extends BaseResourceModel implements IUserTenant {
  userId?: string;
  tenantId?: string;
  tenantCredentialId?: string;
  isAdmin?: boolean;

  static fromJson(jsonData: any) : UserTenant {
    return Object.assign(new UserTenant(), jsonData);
  }
}