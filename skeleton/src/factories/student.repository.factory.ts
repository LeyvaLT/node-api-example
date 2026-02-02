import { config } from '../config/env';
import { IStudentRepository } from '../repositories/student.repository.interface';
import { MockStudentRepository } from '../repositories/mock.student.repository';

export class StudentRepositoryFactory {
  static getRepository(): IStudentRepository {
    switch (config.DATA_SOURCE) {
      case 'mock':
        return new MockStudentRepository();
      // Future implementations:
      // case 'postgres':
      //   return new PostgresStudentRepository();
      default:
        throw new Error(`Unsupported data source: ${config.DATA_SOURCE}`);
    }
  }
}
