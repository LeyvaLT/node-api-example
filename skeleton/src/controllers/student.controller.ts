import { Request, Response } from 'express';
import { StudentRepositoryFactory } from '../factories/student.repository.factory';

export const getStudents = async (_req: Request, res: Response): Promise<void> => {
  try {
    const repository = StudentRepositoryFactory.getRepository();
    const students = await repository.getAll();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
