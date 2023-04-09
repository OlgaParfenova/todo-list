import { Component } from 'react';

import styles from './styles.module.css';
import {
  TaskListContainer,
  TabsContainer,
  AddButtonContainer,
} from './innerComponents';

export class MainPage extends Component {
  render() {
    return (
      <>
        <AddButtonContainer color="primary" className={styles.button}>
          Add a new task
        </AddButtonContainer>
        <TabsContainer className={styles.tabs} />
        <TaskListContainer />
      </>
    );
  }
}
