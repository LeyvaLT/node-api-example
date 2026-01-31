import { Student } from '../types/student';

export interface IStudentRepository {
  getAll(): Promise<Student[]>;
}
