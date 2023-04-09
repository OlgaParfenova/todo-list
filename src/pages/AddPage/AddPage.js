import {AddForm, Typography} from "../../components";
import styles from "./styles.module.css";

export const AddPage = () => {
    return (
        <>
            <Typography variant='h5' className={styles.title}>Add a task</Typography>
            <AddForm/>
        </>
    );

}