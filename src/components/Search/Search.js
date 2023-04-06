import {Input} from "../Input";
import {ButtonSearch} from "../ButtonSearch";
import styles from './styles.module.css'

export const Search = ({className, ...otherProps}) => {
    return <form {...otherProps} className={`${styles.form} ${className || ''}`}>
        <Input className={styles.input} />
        <ButtonSearch className={styles.button} />
    </form>;
}
