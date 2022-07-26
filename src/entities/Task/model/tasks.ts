import { createEvent, createStore } from 'effector';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';

import { Task } from '@/shared/types';

const INIT: Task[] = [
  {
    id: uuidv4(),
    title: 'first',
    description: 'This is first task',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: 'buy a milk',
    description: 'This is second task',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: 'send messages',
    description: 'This is third task',
    isCompleted: false,
  },
];

const toggleTask = createEvent<Pick<Task, 'id'>>();
const addTask = createEvent<Pick<Task, 'title'>>();
const deleteTask = createEvent<Pick<Task, 'id'>>();

const $tasks = createStore<Task[]>(INIT);
const $tasksIds = $tasks.map((tasks) => tasks.map(({ id }) => id));

$tasks
  .on(toggleTask, (state, payload) =>
    produce(state, (draft) => {
      const index = draft.findIndex(({ id }) => id === payload.id);
      if (index !== -1) draft[index].isCompleted = !draft[index].isCompleted;
    }),
  )
  .on(addTask, (state, payload) =>
    produce(state, (draft) => {
      draft.unshift({
        id: uuidv4(),
        title: payload.title,
        description: 'desc',
        isCompleted: false,
      });
    }),
  )
  .on(deleteTask, (state, payload) =>
    produce(state, (draft) => {
      const index = draft.findIndex(({ id }) => id === payload.id);
      if (index !== -1) draft.splice(index, 1);
    }),
  );

export const selectors = {
  $tasks,
  $tasksIds,
};

export const events = {
  toggleTask,
  addTask,
  deleteTask,
};
