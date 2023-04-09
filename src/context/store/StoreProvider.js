import { Component } from 'react';

import { initialState } from './initialState';
import { storeContext } from './storeContext';
import { getFilteredTasks } from '../../utils';

export class StoreProvider extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  deleteTask = taskId => {
    const { tasks, activeTab, searchQuery } = this.state;
    const id = tasks.findIndex(item => item.id === taskId);
    if (id === -1) return;
    const newTasks = [...tasks.slice(0, id), ...tasks.slice(id + 1)];
    this.setState({ tasks: newTasks });
    this.setFilteredTasks(activeTab, searchQuery);
  };

  updateTask = task => {
    const { tasks, activeTab, searchQuery } = this.state;
    const id = tasks.findIndex(item => item.id === task.id);
    if (id === -1) return;
    const newTasks = [...tasks.slice(0, id), task, ...tasks.slice(id + 1)];
    this.setState({ tasks: newTasks });
    this.setFilteredTasks(activeTab, searchQuery);
  };

  getTask = taskId => {
    const { tasks } = this.state;
    return tasks.find(item => item.id === taskId);
  };

  setFilteredTasks = (activeTab, searchQuery = '') => {
    const { tasks } = this.state;
    this.setState(state => {
      return {
        filteredTasks: getFilteredTasks(state.tasks)(activeTab, searchQuery),
      };
    });
  };

  setActiveTab = activeTab => {
    this.setState({ activeTab });
    this.setFilteredTasks(activeTab, '');
  };

  setTaskStatus = (taskId, status) => {
    const { tasks, activeTab, searchQuery } = this.state;
    const id = tasks.findIndex(item => item.id === taskId);
    if (id === -1) return;
    const task = { ...tasks[id] };
    task.status = status;
    const newTasks = [...tasks.slice(0, id), task, ...tasks.slice(id + 1)];
    this.setState({ tasks: newTasks });
    this.setFilteredTasks(activeTab, searchQuery);
  };

  render() {
    const value = {
      ...this.state,
      setActiveTab: this.setActiveTab,
      deleteTask: this.deleteTask,
      setTaskStatus: this.setTaskStatus,
      getTask: this.getTask,
      updateTask: this.updateTask,
    };

    const { children } = this.props;

    return (
      <storeContext.Provider value={value}>{children}</storeContext.Provider>
    );
  }
}
