import { EditForm, Typography } from '../../components';
import styles from './styles.module.css';
import { withRouter } from '../../hoc';

const EditFormWithRouter = withRouter(EditForm);

export const EditPage = () => {
  return (
    <>
      <Typography variant="h5" className={styles.title}>
        Edit the task
      </Typography>
      <EditFormWithRouter />
    </>
  );
};
