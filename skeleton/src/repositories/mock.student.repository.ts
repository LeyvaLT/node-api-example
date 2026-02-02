import { readFile } from 'fs/promises';
import path from 'path';
import { IStudentRepository } from './student.repository.interface';
import { Student } from '../types/student';

export class MockStudentRepository implements IStudentRepository {
  private readonly dataPath = path.join(process.cwd(), 'src/data/students.json');

  async getAll(): Promise<Student[]> {
    try {
      const data = await readFile(this.dataPath, 'utf-8');
      return JSON.parse(data) as Student[];
    } catch (error) {
      console.error('Error reading mock data:', error);
      return [];
    }
  }
}
