import { BaseEntity } from '@/libs/database/entities';

export class User extends BaseEntity {
  name?: string;
  email?: string;
  password?: string;

  constructor() {
    super();
  }
}
