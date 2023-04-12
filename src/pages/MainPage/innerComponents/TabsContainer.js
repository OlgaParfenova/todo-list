import { Component } from 'react';

import { storeContext } from '../../../context';
import { TabItem, Tabs } from '../../../components';

const tabs = ['active', 'done', 'archived'];

export class TabsContainer extends Component {
  static contextType = storeContext;

  handleClickTab = (status) => () => {
    const { setActiveTab, activeTab } = this.context;
    if (activeTab === status) return;
    setActiveTab(status);
  };

  render() {
    const { activeTab } = this.context;
    const tabsItems = tabs.map((item) => (
      <TabItem
        key={item}
        isActive={activeTab === item}
        status={item}
        onClick={this.handleClickTab(item)}
      />
    ));

    return <Tabs {...this.props}>{tabsItems}</Tabs>;
  }
}
