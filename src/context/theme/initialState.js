import { localStorageApi } from '../../api';

const themeFromLocalStorage = localStorageApi.getThemeMode();
export const initialState = {
  mode: themeFromLocalStorage || 'light',
};
