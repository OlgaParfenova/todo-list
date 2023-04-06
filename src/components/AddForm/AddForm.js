import {Typography} from "../Typography";
import {Input} from "../Input";
import {Textarea} from "../Textarea";
import {Button} from "../Button";
import styles from './styles.module.css';

export const AddForm = () => {
    return <form>
        <Typography variant='h5' className={styles.title} children='Add task' />
        <Input className={styles.input} placeHolder='Title' />
        <Textarea className={styles.textarea} placeHolder='Description' />
        <Button className={styles.button}>Save</Button>
    </form>
};
