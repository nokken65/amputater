import { ID } from './common';

export type Task = {
  id: ID;
  title: string;
  description: string;
  isCompleted: boolean;
};
