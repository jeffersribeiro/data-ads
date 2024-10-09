import fs from 'fs';
import { DataSource } from '@/libs/database';
import { BaseEntity } from '@/libs/database/entities';

export class FileDataSource implements DataSource {
  async save(params: BaseEntity): Promise<any> {
    fs.writeFileSync(
      `./data/file/${params.constructor.name}.json`,
      JSON.stringify(params),
    );
  }

  async findOne(params: BaseEntity): Promise<any> {
    fs.writeFileSync(
      `./data/file/${params.constructor.name}.json`,
      JSON.stringify(params),
    );
  }
}
