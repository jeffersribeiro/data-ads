import { DataSource } from '../data-source';
import { BaseEntity } from '../entities';

export class Repository implements DataSource {
  constructor(private readonly dataSource: DataSource) {}

  async save(params: BaseEntity): Promise<any> {
    await this.dataSource.save(params);
  }

  async findOne(params: any): Promise<any> {
    await this.dataSource.findOne(params);
  }
}
