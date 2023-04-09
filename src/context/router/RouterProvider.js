import { Component } from 'react';

import { routerContext } from './routerContext';
import { initialState } from './initialState';

export class RouterProvider extends Component {
  static contextType = routerContext;

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  navigate = (page, payload = null) => {
    this.setState({
      page: {
        value: page,
        payload,
      },
    });
  };

  render() {
    const { children } = this.props;
    const value = {
      ...this.state,
      navigate: this.navigate,
    };

    return (
      <routerContext.Provider value={value}>{children}</routerContext.Provider>
    );
  }
}
