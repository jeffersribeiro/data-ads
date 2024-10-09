import { v4 as uuidv4 } from 'uuid';

export class BaseEntity {
  private readonly id: string;
  created: Date;
  updated: Date;

  constructor() {
    this.id = uuidv4();
    this.created = new Date();
    this.updated = new Date();
  }
}
