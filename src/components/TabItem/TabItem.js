import styles from './styles.module.css';

export const TabItem = ({isActive = false, status, label, className, ...otherProps}) => {
    return <button
        {...otherProps}
        type='button'
        className={`${styles.tabItem} ${isActive ? styles.active : ''} ${className || ''}`}>{label || status}</button>;
};
