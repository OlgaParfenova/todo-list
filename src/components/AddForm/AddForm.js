import {Input} from "../Input";
import {Textarea} from "../Textarea";
import {Button} from "../Button";
import styles from './styles.module.css';

export const AddForm = () => {
    return <form>
        <Input className={styles.input} placeholder='Title'/>
        <Textarea className={styles.textarea} placeholder='Description'/>
        <Button className={styles.button}>Save</Button>
    </form>
};
