import styles from './styles.module.css';

export const Paper = ({children, className, ...otherProps}) => {
    return <div {...otherProps}  className={`${styles.paper} ${className || ''}`} >{children}</div>;
}
