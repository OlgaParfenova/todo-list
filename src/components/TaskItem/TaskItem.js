import { ButtonDone } from '../ButtonDone';
import { ButtonEdit } from '../ButtonEdit';
import { ButtonArchive } from '../ButtonArchive';
import { ButtonDelete } from '../ButtonDelete';
import { Typography } from '../Typography';
import styles from './styles.module.css';
import { ButtonActivate } from '../ButtonActivate';

export const TaskItem = ({
  darkBg,
  className,
  onDeleteTask,
  onArchiveTask,
  onDoneTask,
  onActivateTask,
  onEditTask,
  onViewTask,
  status,
  children,
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      className={`${styles.taskItem} ${darkBg ? styles.darkBg : ''} ${
        className || ''
      }`}
    >
      <Typography
        className={styles.text}
        children={children}
        onClick={onViewTask}
      />
      {status !== 'done' && (
        <ButtonDone className={styles.button} onClick={onDoneTask} />
      )}
      {status !== 'archived' && (
        <ButtonArchive className={styles.button} onClick={onArchiveTask} />
      )}
      {status !== 'active' && (
        <ButtonActivate className={styles.button} onClick={onActivateTask} />
      )}
      <ButtonEdit className={styles.button} onClick={onEditTask} />
      <ButtonDelete className={styles.button} onClick={onDeleteTask} />
    </div>
  );
};
