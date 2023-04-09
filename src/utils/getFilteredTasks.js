export const getFilteredTasks =
  (tasks) =>
  (activeTab, query = '') => {
    console.log('getFilteredTasks');
    const newQuery = query.toLowerCase();
    let filteredTasks = tasks.filter(({ status }) => status === activeTab);
    filteredTasks = filteredTasks.filter(({ title }) => {
      const newTitle = title.toLowerCase();
      return newTitle.indexOf(newQuery) !== -1;
    });
    return filteredTasks;
  };
