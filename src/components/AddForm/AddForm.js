import { Component } from 'react';

import { Input } from '../Input';
import { Textarea } from '../Textarea';
import { Button } from '../Button';
import { storeContext } from '../../context';
import styles from './styles.module.css';
import { Typography } from '../Typography';

export class AddForm extends Component {
  static contextType = storeContext;

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      validate: {
        title: {
          isValidate: true,
          errorMessage: 'Title should be at least two characters',
        },
      },
    };
  }

  componentDidMount() {
    const { page } = this.props;
    this.setState({
      title: '',
      description: '',
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) === JSON.stringify(this.state)) return;
    const { title } = this.state;
    const { validate } = this.state;
    const newValidate = JSON.parse(JSON.stringify(validate));
    newValidate.title.isValidate = !(title.length <= 2);

    this.setState(() => ({
      validate: newValidate,
    }));
  }

  handleChangeInput = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    const { addTask } = this.context;
    const { navigate } = this.props;
    addTask({ title, description });
    navigate('mainPage');
  };

  handleClickCancelButton = () => {
    const { navigate } = this.props;
    navigate('mainPage');
  };

  render() {
    const { title, description, validate } = this.state;
    const isTitleValid = validate.title.isValidate;
    const titleErrorMessage = validate.title.errorMessage;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <Input
          className={styles.input}
          placeholder="Title"
          value={title}
          name="title"
          onChange={this.handleChangeInput('title')}
          isInvalid={!isTitleValid}
        />

        <Textarea
          className={styles.textarea}
          placeholder="Description"
          value={description}
          name="description"
          onChange={this.handleChangeInput('description')}
        />
        {!isTitleValid && (
          <Typography
            variant={'body2'}
            color="error"
            className={styles.errorMessage}
          >
            {titleErrorMessage}
          </Typography>
        )}
        <Button
          type="submit"
          className={styles.button}
          disabled={!isTitleValid}
        >
          Save
        </Button>
        <Button
          type="button"
          className={`${styles.button} ${styles.cancelButton}`}
          onClick={this.handleClickCancelButton}
        >
          Cancel
        </Button>
      </form>
    );
  }
}
