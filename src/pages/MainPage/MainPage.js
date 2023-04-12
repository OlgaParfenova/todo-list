import { Component } from 'react';

import styles from './styles.module.css';
import { TaskListContainer, TabsContainer, Header } from './innerComponents';
import { Search } from '../../components';

export class MainPage extends Component {
  render() {
    return (
      <>
        <Header className={styles.header} />
        <Search className={styles.search} />
        <TabsContainer className={styles.tabs} />
        <TaskListContainer />
      </>
    );
  }
}
