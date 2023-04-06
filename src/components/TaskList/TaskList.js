import styles from './styles.module.css'

export const TaskList = ({children, className, ...otherProps}) => {
    return (
        <div {...otherProps} className={`${styles.taskList} ${className || ''}`}>{children}</div>
    );
}

