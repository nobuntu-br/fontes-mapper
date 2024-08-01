import { ModelStatic, Sequelize } from "sequelize";

//TODO precisará ser gerada as importações
import userModel from "./user.model";
import roleModel from "./role.model";
import tenantModel from "./tenant.model";
import userTenantModel from "./userTenant.model";
import tenantCredentialModel from "./tenantCredential.model";
import functionSystemModel from "./functionSystem.model";
import functionSystemRoleModel from "./functionSystemRole.model";
import userRoleModel from "./userRole.model";

export default async function setModels(sequelize: Sequelize) {

  // var models: ModelStatic<any>[] = [];
  // var models : IModel[] = [];

  const user = userModel(sequelize);
  // models.push({name: "user", model: user});
  // models.push(user);
  const role = roleModel(sequelize);
  // models.push({name: "role", model: role});
  // models.push(role);
  const userRole = userRoleModel(sequelize);
  // models.push({name: "userRole", model: userRole});
  // models.push(userRole);
  const tenant = tenantModel(sequelize);
  // models.push({name: "tenant", model: tenant});
  // models.push(tenant);
  const userTenant = userTenantModel(sequelize);
  // models.push({name: "userTenant", model: userTenant});
  // models.push(userTenant);
  const tenantCredential = tenantCredentialModel(sequelize);
  // models.push({name: "tenantCredentials", model: tenantCredentials});
  // models.push(tenantCredentials);
  const functionSystem = functionSystemModel(sequelize);
  // models.push({name: "functionSystem", model: functionSystem});
  // models.push(functionsSystem);
  const functionSystemRole = functionSystemRoleModel(sequelize);
  // models.push({name: "functionSystem", model: functionSystem});
  // models.push(functionSystemRoles);

  //Relação de muitos pra muitos de User para Role
  user.belongsToMany(role, {through: userRole});
  role.belongsToMany(user, {through: userRole});

  // Chamando os métodos de associação
  // tenant.hasMany(tenantCredentials);
  // tenantCredentials.belongsTo(tenant);

  //Relação de muitos pra muitos de User para Tenant
  user.belongsToMany(tenant, { through: userTenant });
  tenant.belongsToMany(user, { through: userTenant });
  tenantCredential.belongsTo(userTenant);//TODO testar isso

  //Relação de muitos pra muitos entre Role e FunctionsSystem
  role.belongsToMany(functionSystem, { through: functionSystemRole });
  functionSystem.belongsToMany(role, { through: functionSystemRole });

  await sequelize.sync();

  const models = {
    user,
    role,
    userRole,
    tenant,
    userTenant,
    tenantCredential,
    functionSystem,
    functionSystemRole
    //Precisará ser gerado aqui os nomes das variáveis de cada model
  }

  return models;
}