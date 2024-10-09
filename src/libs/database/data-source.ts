import { BaseEntity } from './entities';

export interface DataSource {
  save: (params: BaseEntity) => Promise<any>;
  findOne: (params: BaseEntity) => Promise<BaseEntity | null>;
}

export interface DataSourceOptions {
  path: string;
}
