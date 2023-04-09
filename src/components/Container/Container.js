import styles from './styles.module.css';

export const Container = ({ children, className, ...otherProps }) => {
  return (
    <div {...otherProps} className={`${styles.container} ${className || ''}`}>
      {children}
    </div>
  );
};
