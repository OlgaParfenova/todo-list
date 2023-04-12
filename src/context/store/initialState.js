import { localStorageApi } from '../../api';

const tasksFromLocalStorage = localStorageApi.getTasks();
export const initialState = {
  tasks: tasksFromLocalStorage || [
    {
      id: 0,
      title: 'First task',
      description: 'Start using the amazing app!',
      status: 'active',
    },
    {
      id: 1,
      title: 'Create a new task',
      description: 'Wright some good description',
      status: 'active',
    },
    {
      id: 2,
      title: 'Edit the task',
      description: 'You may always change your tasks',
      status: 'active',
    },
    {
      id: 3,
      title: 'Delete the task',
      description: 'Once you have completed the task, you may delete it',
      status: 'active',
    },
    {
      id: 4,
      title: 'Enjoy your day',
      description: 'Do something wonderful',
      status: 'active',
    },
  ],
  activeTab: 'active',
  currentPage: 'mainPage',
  searchQuery: '',
  filteredTasks: tasksFromLocalStorage || [
    {
      id: 0,
      title: 'First task',
      description: 'Start using the amazing app!',
      status: 'active',
    },
    {
      id: 1,
      title: 'Create a new task',
      description: 'Wright some good description',
      status: 'active',
    },
    {
      id: 2,
      title: 'Edit the task',
      description: 'You may always change your tasks',
      status: 'active',
    },
    {
      id: 3,
      title: 'Delete the task',
      description: 'Once you have completed the task, you may delete it',
      status: 'active',
    },
    {
      id: 4,
      title: 'Enjoy your day',
      description: 'Do something wonderful',
      status: 'active',
    },
  ],
};
