import { Button, EditForm, Typography } from '../../components';
import styles from './styles.module.css';
import { withRouter, withStore } from '../../hoc';

const DetailsPage = ({ page, navigate, getTask }) => {
  const taskId = page.payload.pageId;
  const details = getTask(taskId);
  const { title, description } = details;
  const handleEditButton = () => {
    navigate('editPage', { pageId: taskId });
  };
  const handleBackButton = () => {
    navigate('mainPage');
  };

  return (
    <>
      <Typography variant="h3" className={styles.title}>
        {title}
      </Typography>
      <Typography variant="body1" className={styles.title}>
        {description || 'No description has been added yet.'}
      </Typography>
      <div className={styles.buttonsWrap}>
        <Button onClick={handleEditButton}>Edit</Button>
        <Button onClick={handleBackButton}>Back to the main page</Button>
      </div>
    </>
  );
};

const DetailsPageWithData = withRouter(withStore(DetailsPage));

export { DetailsPageWithData };
