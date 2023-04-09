import styles from './styles.module.css';

export const Tabs = ({ children, className, ...otherProps }) => {
  return (
    <div {...otherProps} className={`${styles.tabs} ${className || ''}`}>
      {children}
    </div>
  );
};
