import { AddForm, Typography } from '../../components';
import styles from './styles.module.css';
import { withRouter } from '../../hoc';

const AddFormWithRouter = withRouter(AddForm);
export const AddPage = () => {
  return (
    <>
      <Typography variant="h5" className={styles.title}>
        Add a task
      </Typography>
      <AddFormWithRouter />
    </>
  );
};
