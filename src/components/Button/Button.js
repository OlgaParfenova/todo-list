import styles from './styles.module.css';

export const Button = ({
  children,
  color = 'primary',
  className,
  ...otherProps
}) => {
  return (
    <button
      type="button"
      {...otherProps}
      className={`${styles.button} ${styles[color]} ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  );
};
