import { EditForm, Typography } from '../../components';
import styles from './styles.module.css';
import { routerContext } from '../../context';

const { Consumer: RouterConsumer } = routerContext;
const EditFormWithRouter = props => {
  return (
    <RouterConsumer>
      {({ navigate, page }) => {
        return <EditForm navigate={navigate} page={page} {...props} />;
      }}
    </RouterConsumer>
  );
};

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
