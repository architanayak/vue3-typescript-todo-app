export class BaseModel {
  constructor() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.deletedAt = new Date();
  }
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default BaseModel;
