import styles from './styles.module.css';

export const Textarea = ({ isInvalid, className, ...otherProps }) => {
  return (
    <textarea
      {...otherProps}
      className={`${styles.textarea} ${isInvalid ? styles.invalid : ''} ${
        className || ''
      } `}
    />
  );
};
