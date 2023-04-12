import { Component } from 'react';

import { themeContext } from '../../../../context';
import { ButtonThemeMode } from '../../../../components';
import { AddButtonContainer } from '../AddButtonContainer';
import styles from './styles.module.css';

export class Header extends Component {
  static contextType = themeContext;

  handleToggleTheme = () => {
    const { toggleTheme } = this.context;
    toggleTheme();
  };

  render() {
    const { className, ...otherProps } = this.props;
    const { mode } = this.context;
    return (
      <div
        {...otherProps}
        className={`${styles.header} ${className ? className : ''}`}
      >
        <AddButtonContainer color="primary" className={styles.button}>
          Add a new task
        </AddButtonContainer>
        <ButtonThemeMode
          className={styles.button}
          onClick={this.handleToggleTheme}
          mode={mode}
        />
      </div>
    );
  }
}
