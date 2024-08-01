import getMongooseSecurityModels from "../models/mongoose/indexSecurity.model";
import getSequelizeSecurityModels from "../models/sequelize/indexSecurity.model";
import getMongooseModels from "../models/mongoose/index.model";
import getSequelizeModels from "../models/sequelize/index.model";
import mongoose, { Connection } from 'mongoose';
import { Sequelize } from 'sequelize';
import TenantConnection from '../models/tenantConnection.model';
import TenantService from "../services/tenant.service";
import UserTenantService from "../services/userTenant.service";
import { TenantConnectionService } from "../services/tenantConnection.service";
import { TenantCredentialService } from "../services/tenantCredential.service";

/**
 * Armazena todas as instâncias de conexão com banco de dados
 */
// export var tenantConnections: { [key: string]: TenantConnection } = {};
const tenantConnectionService : TenantConnectionService = new TenantConnectionService();

/**
 * Obtem a instância de conexão com o banco de dados de acordo com o tenant
 * @param {*} tenantId
 * @param {*} dbConfig Configurações de conexão do banco de dados 
 * @returns 
 */
export async function getTenantConnection(tenantId: string, userId: string): Promise<TenantConnection | null> {
  try {

    //Obter a conexão padrão com o banco de dados
    const defaultTenantConnection: TenantConnection = await getDefaultTenantConnection();

    //Cria o serviço de UserTenant com base na conexão com o banco de dados
    const userTenantService: UserTenantService = new UserTenantService(defaultTenantConnection.databaseType, defaultTenantConnection.models["userTenant"]);

    //Verifica se o usuário tem acesso ao tenant
    if (await userTenantService.userHasAccessToTenant(userId, tenantId) == false) {
      return null;
    }
    
    const tenantConnection : TenantConnection = tenantConnectionService.findOneConnection(tenantId); 

    if(tenantConnection == null){
      
      const tenantCredentialService : TenantCredentialService = new TenantCredentialService(defaultTenantConnection.databaseType, defaultTenantConnection.models["tenantCredential"]);
      const tenantCredential = tenantCredentialService.findById(tenantId);
      //TODO obter o tenantCredential para realizar a conexão com o banco
      // await connectTenant(tenantId, tenantCredential.databaseType, )

      //TODO vai ser preciso adicionar Model para facilitar obter as variáveis das classes

    }

    return tenantConnection;
  } catch (error) {
    throw new Error('Banco de dados não encontrado');
  }

};

/**
* Obter a instância de conexão com o banco de dados. Sendo esse banco de dados do banco responsável por armazenar os tenants. Sendo chaamdo de banco 'default'.
* @returns retornar uma instância de conexão com o banco de dados
*/
export async function getDefaultTenantConnection(): Promise<TenantConnection> {
  const databaseType = process.env.defaultSecutityConnectionDatabaseType;
  const uri = process.env.DatabaseUri;
  const tenantId = process.env.defaultSecutiryConnectionCode;

  if (databaseType == undefined || uri == undefined || tenantId == undefined) {
    throw new Error(`Dados ausentes ao realizar a conexão com o banco security`);
  }

  try {

    const tenantConnection : TenantConnection = tenantConnectionService.findOneConnection(tenantId); 
    if (tenantConnection == null) {
      await connectTenant(tenantId, databaseType, uri);
    }

    return tenantConnection;

  } catch (error) {
    throw new Error(`Erro ao realizar a conexão com o banco security: ${error}`);
  }
}

/**
 * Realiza a conexão com o banco de dados de acordo com o tipo de banco de dados. Seta os models de acordo com o banco de dados.
 * @param tenantId
 * @param databaseType
 * @param dbURI
 * @returns
 */
export default async function connectTenant(tenantId: string, databaseType: string, dbURI: string): Promise<TenantConnection> {
  try {

    let tenantConnection: TenantConnection;

    if (dbURI === process.env.DatabaseUri) {
      tenantConnection = await connectToDatabase(databaseType, dbURI, true);
      tenantConnection.models = await getModelsSecurity(databaseType, tenantConnection.connection);
    } else {
      tenantConnection = await connectToDatabase(databaseType, dbURI, false);
      tenantConnection.models = await getModels(databaseType, tenantConnection.connection);
    }

    // await registerRoutes.saveRoutes(tenantConnection); //TODO colocar para salvar as rotas novamente

    tenantConnectionService.setOnTenantConnectionPool(tenantId, tenantConnection); 

    return tenantConnection;

  } catch (error) {
    console.warn("Erro ao realizar a conexão com o banco de dados!", error);
    throw new Error("Erro ao realizar a conexão com o banco de dados!");
  }
}

/**
 * Define os models da banco de dados Security na conexão
 * @param databaseType Tipo de banco de dados
 * @param connection Instância da conexão com o banco de dados
 * @returns
 */
function getModelsSecurity(databaseType: string, connection: any): any {
  if (databaseType === "mongodb") {
    return getMongooseSecurityModels(connection);
  } else if (databaseType === "postgres") {
    return getSequelizeSecurityModels(connection);
  }

  return connection;
}

/**
 * Define os models da banco de dados na conexão
 * @param databaseType Tipo de banco de dados
 * @param connection Instância da conexão com o banco de dados
 * @returns
 */
function getModels(databaseType: string, connection: any): any {
  if (databaseType === "mongodb") {
    return getMongooseModels(connection);
  } else if (databaseType === "postgres") {
    return getSequelizeModels(connection);
  }

  return connection;
}

export async function connectToDatabase(databaseType: string, uri: string, isDefaultConnection: boolean): Promise<TenantConnection> {
  if (databaseType === 'mongodb') {
    const _connection = await connectToDatabaseWithMongoose(uri);
    return new TenantConnection('mongodb', _connection, isDefaultConnection);
  } else if (databaseType === 'postgres') {
    const _connection = await connectToDatabaseWithSequelize(uri);
    return new TenantConnection('postgres', _connection, isDefaultConnection);
  } else if (databaseType === 'firebird') {
    // TODO: Implement Firebird connection
    throw new Error('Método não implementado no momento');
  } else {
    throw new Error('Tipo de banco de dados não suportado');
  }
}

async function connectToDatabaseWithMongoose(uri: string): Promise<Connection> {
  try {
    const connection = await mongoose.createConnection(uri);
    console.log("Conexão com banco de dados MongoDB feita!");
    return connection;
  } catch (error) {
    console.log({ error: "Erro durante a conexão com o banco de dados", description: error });
    throw new Error('Erro ao conectar com banco de dados');
  }
}

async function connectToDatabaseWithSequelize(uri: string): Promise<Sequelize> {
  console.log("URI: ", uri);
  try {
    const sequelize = new Sequelize(uri, {
      dialect: 'postgres',
      logging: false,
    });

    await sequelize.authenticate();
    console.log("Conexão com banco de dados postgres feita");
    return sequelize;
  } catch (error) {
    console.log({ error: "Erro durante a conexão com o banco de dados", description: error });
    throw new Error('Erro ao conectar com banco de dados');
  }
}

async function connectToDatabaseWithFirebird(uri: string): Promise<void> {
  // TODO: Implement Firebird connection
  // Armazenar no array de instâncias de conexão
}
