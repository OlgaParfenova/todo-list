export const getFilteredTasks =
  tasks =>
  (activeTab, query = '') => {
    let filteredTasks = tasks.filter(({ status }) => status === activeTab);
    filteredTasks = filteredTasks.filter(
      ({ title }) => title.indexOf(query) !== -1,
    );
    return filteredTasks;
  };
