import { DbType } from "../adapters/createDb.adapter";
import { User } from "../models/user.model";
import UserRepository from "../repository/user.repository";
import BaseService from "./base.service";

export class UserService extends BaseService<User> {
  repository: UserRepository;

  constructor(dbType: DbType, model: any) {
    //Cria o repositório com dados para obter o banco de dados
    var _repository: UserRepository = new UserRepository(dbType, model);
    super(_repository, dbType, model);
    this.repository = _repository;
  }

  /**
   * Verifica se usuário é administrador
   * @param {*} userUID identificador universal do usuário
   * @param {*} databaseConnection instância da conexão com o banco de dados
   * @returns "True" caso usuário for adminitrador, caso contrário, retorna "False"
   */
  async isUserAdmin(userUID: string) {
    try {
      // const userRepository = createDbAdapter(databaseConnection.databaseType, databaseConnection.models.user);
      // const _user = await userRepository.findOne({ UID: userUID });
      const _user = await this.repository.findOne({UID: userUID});

      if (_user != null && _user.isAdministrator != null) {
        //Se o usuário é administrador
        if (_user.isAdministrator == true) {
          return true;
        }
      } else {
        return false;
      }
    } catch (error) {
      console.error({ message: "Erro ao obter o usuário", details: error });
      return false;
    }
  }

}