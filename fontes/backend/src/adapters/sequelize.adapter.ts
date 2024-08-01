import { ModelStatic } from "sequelize";
import { IDatabaseAdapter } from "./IDatabase.adapter";

export class SequelizeAdapter<T> implements IDatabaseAdapter<T> {

  private model: ModelStatic<any>;

  constructor(model: any, protected jsonDataToResourceFn: (jsonData: any) => T) {
    this.model = model;
  }

  async create(data: Object): Promise<T> {
    try {
      const newItem = await this.model.create(data as any);
      return this.jsonDataToResource(newItem);
    } catch (error) {
      console.warn("Error to save entity to database using sequelize. Details: " + error);
      throw new Error("Error to save entity to database using sequelize.");
    }
  }

  async findAll(limitPerPage: number, offset: number): Promise<T[]> {
    try {

      const items = await this.model.findAll({
        limit: limitPerPage,
        offset: offset,
        order: [['createdAt', 'DESC']], // Ordenar por data de criação, por exemplo
      });

      return this.jsonDataToResources(items);

    } catch (error) {
      console.warn("Error to find all entities to database using sequelize. Details: " + error);
      throw new Error("Error to find all entities to database using sequelize.");
    }
  }

  async findOne(query: string): Promise<T | null> {
    try {
      const item = await this.model.findOne({ where: { title: 'My Title' } });
      return this.jsonDataToResource(item);
    } catch (error) {
      console.warn("Error to find one entity to database using sequelize. Details: " + error);
      throw new Error("Error to find one entity to database using sequelize.");
    }
  }

  async findById(id: string): Promise<T | null> {
    throw new Error("Method not implemented.");
  }

  async getCount(): Promise<number | null> {
    try {
      var count = await this.model.count();
      return count;
    } catch (error) {
      console.warn("Error to get count entities to database using sequelize. Details: " + error);
      throw new Error("Error to get count entities to database using sequelize.");
    }

  }

  async update(id: string, data: Object): Promise<T | null> {
    throw new Error("Method not implemented.");

  }

  async delete(id: string): Promise<T | null> {

    try {
      const removedItem = await this.model.destroy({
        where: {
          id: id,
        },
      });

      return this.jsonDataToResource(removedItem);
    } catch (error) {
      console.warn("Error to get delete entity to database using sequelize. Details: " + error);
      throw new Error("Error to get delete entity to database using sequelize.");
    }
    
  }

  async deleteAll(): Promise<void> {
    try {
      await this.model.truncate();
    } catch (error) {
      console.warn("Error to get delete all entity to database using sequelize. Details: " + error);
      throw new Error("Error to get delete all entity to database using sequelize.");
    }
  }

  findCustom(query: any): Promise<T[] | null> {
    throw new Error("Method not implemented.");
  }

  protected jsonDataToResources(jsonData: any[]): T[] {
    const resources: T[] = [];
    jsonData.forEach(
      element => resources.push(this.jsonDataToResourceFn(element.dataValues))
    );
    return resources;
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData.dataValues);
  }

}
