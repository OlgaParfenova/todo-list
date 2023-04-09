import { Component } from 'react';

import { routerContext } from './routerContext';

export class Route extends Component {
  static contextType = routerContext;

  render() {
    const { children, page } = this.props;
    const {
      page: { value: pageValue },
    } = this.context;
    return page === pageValue ? children : null;
  }
}
