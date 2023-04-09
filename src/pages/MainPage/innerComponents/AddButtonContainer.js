import { Component } from 'react';

import { routerContext } from '../../../context';
import { Button } from '../../../components';

export class AddButtonContainer extends Component {
  static contextType = routerContext;

  handleClickButton = () => {
    this.context.navigate('addPage');
  };

  render() {
    return <Button onClick={this.handleClickButton} {...this.props} />;
  }
}
