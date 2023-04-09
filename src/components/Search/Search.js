import { Component } from 'react';
import { Input } from '../Input';
import { searchIcon } from '../../assets/icons';
import styles from './styles.module.css';
import { storeContext } from '../../context';

class Search extends Component {
  static contextType = storeContext;

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChangeInput = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount() {
    const { searchQuery } = this.context;
    this.setState({
      search: searchQuery,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    const { filterTasks } = this.context;
    if (prevState.search === search) return;
    filterTasks(search);
  }

  render() {
    const { className, ...otherProps } = this.props;
    const { search } = this.state;

    return (
      <form {...otherProps} className={`${styles.form} ${className || ''}`}>
        <Input
          name="search"
          value={search}
          className={styles.input}
          onChange={this.handleChangeInput('search')}
        />
        {searchIcon}
      </form>
    );
  }
}

export { Search };
