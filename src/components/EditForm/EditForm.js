import { Component } from 'react';

import { Input } from '../Input';
import { Textarea } from '../Textarea';
import { Button } from '../Button';
import { storeContext } from '../../context';
import styles from './styles.module.css';

export class EditForm extends Component {
  static contextType = storeContext;

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  componentDidMount() {
    const { getTask } = this.context;
    const { page } = this.props;
    const details = getTask(page.payload.pageId);
    this.setState({
      title: details.title || '',
      description: details.description || '',
    });
  }

  handleChangeInput = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const { getTask, updateTask } = this.context;
    const { page, navigate } = this.props;
    const details = getTask(page.payload.pageId);
    const data = {
      ...details,
      ...this.state,
    };

    updateTask(data);
    navigate('mainPage');
  };

  render() {
    const { title, description } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <Input
          className={styles.input}
          placeholder="Title"
          value={title}
          name="title"
          onChange={this.handleChangeInput('title')}
        />

        <Textarea
          className={styles.textarea}
          placeholder="Description"
          value={description}
          name="description"
          onChange={this.handleChangeInput('description')}
        />

        <Button type="submit" className={styles.button}>
          Save
        </Button>
      </form>
    );
  }
}
