import { Component } from 'react';

import { initialState } from './initialState';
import { themeContext } from './themeContext';
import { localStorageApi } from '../../api';

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.rootElement = document.getElementById('main');
  }

  componentDidMount() {
    this.rootElement.dataset.theme = this.state.mode;
  }
  componentDidUpdate() {
    const { mode } = this.state;
    this.rootElement.dataset.theme = mode;
    localStorageApi.setThemeMode(mode);
  }

  toggleTheme = () => {
    this.setState((state) => ({
      mode: state.mode === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const value = {
      ...this.state,
      toggleTheme: this.toggleTheme,
    };

    const { children } = this.props;

    return (
      <themeContext.Provider value={value}>{children}</themeContext.Provider>
    );
  }
}
