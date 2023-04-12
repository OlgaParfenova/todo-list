class LocalStorageApi {
  setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks() {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  clearTasks() {
    localStorage.removeItem('tasks');
  }

  setThemeMode(mode) {
    localStorage.setItem('themeMode', mode);
  }

  getThemeMode() {
    return localStorage.getItem('themeMode');
  }

  clearThemeMode() {
    return localStorage.removeItem('themeMode');
  }
}

export const localStorageApi = new LocalStorageApi();
