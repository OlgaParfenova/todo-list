import styles from './styles.module.css'

export const Input = ({isInvalid, className, ...otherProps}) => {
    return <input type='text' {...otherProps}
                  className={`${styles.input} ${isInvalid ? styles.invalid : ''} ${className || ''} `}/>;
}
