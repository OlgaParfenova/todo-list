export const initialState = {
  tasks: [
    {
      id: 0,
      title: 'First task',
      description: 'Start using the amazing app!',
      status: 'active',
    },
  ],
  activeTab: 'active', // done, archived
  currentPage: 'mainPage', // editPage, addPage
  searchQuery: '',
  filteredTasks: [
    {
      id: 0,
      title: 'First task',
      description: 'Start using the amazing app!',
      status: 'active',
    },
  ],
};
