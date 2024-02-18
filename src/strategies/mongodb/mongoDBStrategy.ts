import { IBaseStrategy } from "../interfaces/IBaseStrategy";

export default class MongoDBStrategy implements IBaseStrategy {
  constructor(private connectionString: string) {
    this.connectionString = connectionString;
  }

  async connect() {
    console.log('me connectei ao Mongo!!')
  }

  async find(item: any): Promise<void> {
    throw new Error("Method not implemented.");
  }


  async create(item: any) {
    console.log("🚀 ~ MongoDBStrategy ~ create ~ item:", item)
    // return this.dbInstance.save(item)
  }


}