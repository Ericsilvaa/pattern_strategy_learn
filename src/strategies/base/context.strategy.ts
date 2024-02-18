import { IBaseStrategy } from "../interfaces/IBaseStrategy";

export default class ContextStrategy implements IBaseStrategy {
  constructor(private database: any) {
    this.database = database;
  }

  async connect() {
    console.log('EXECUTANDO CONTEXT!!')
  }

  async create(item: any): Promise<void> {
    return item
  }

  async find(item: any): Promise<void> {
    throw new Error("Method not implemented.");
  }

}