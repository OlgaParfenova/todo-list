import {ButtonDone} from "../ButtonDone";
import {ButtonEdit} from "../ButtonEdit";
import {ButtonArchive} from "../ButtonArchive";
import {ButtonDelete} from "../ButtonDelete";
import {Typography} from "../Typography";
import styles from './styles.module.css'

export const TaskItem = ({darkBg, className, children, ...otherProps}) => {
    return (
        <div {...otherProps} className={`${styles.taskItem} ${darkBg ? styles.darkBg : ''} ${className || ''}`}>
            <Typography className={styles.text} children={children}/>
            <ButtonDone className={styles.button}/>
            <ButtonEdit className={styles.button}/>
            <ButtonArchive className={styles.button}/>
            <ButtonDelete className={styles.button}/>
        </div>
    );
}

