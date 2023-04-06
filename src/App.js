import './styles/theme.css';
import {ButtonAdd} from "./components/ButtonAdd";
import {ButtonArchive} from "./components/ButtonArchive";
import {ButtonBack} from "./components/ButtonBack";
import {ButtonDelete} from "./components/ButtonDelete";
import {ButtonDone} from "./components/ButtonDone";
import {ButtonSave} from "./components/ButtonSave";
import {ButtonSearch} from "./components/ButtonSearch";
import {Typography} from "./components/Typography";
import {Paper} from "./components/Paper";
import {Input} from "./components/Input";
import {Textarea} from "./components/Textarea";
import {Search} from "./components/Search";
import {TaskItem} from "./components/TaskItem";
import {TaskList} from "./components/TaskList";
import {EditForm} from "./components/EditForm";
import {AddForm} from "./components/AddForm";
import {TaskDetails} from "./components/TaskDetails";


function App() {
    return (
        <>
            <ButtonAdd/>
            <ButtonArchive/>
            <ButtonBack/>
            <ButtonDelete/>
            <ButtonDone/>
            <ButtonSave/>
            <ButtonSearch/>
            <Typography variant='h5' color='info'>Text</Typography>
            <Paper dataId={20}>Text</Paper>
            <Input />
                <Textarea/>
            <Search />
            <TaskList>
                <TaskItem darkBg>Hello world</TaskItem>
                <TaskItem >Hello world</TaskItem>
                <TaskItem darkBg>Hello world</TaskItem>
            </TaskList>

            <EditForm />

            <AddForm />

            <TaskDetails />

        </>
    );
}

export default App;
