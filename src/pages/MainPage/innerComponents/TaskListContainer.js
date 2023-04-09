import {Component} from "react";

import {routerContext, storeContext} from "../../../context";
import {TaskItem, TaskList} from "../../../components";

const {Consumer: RouterConsumer} = routerContext;

export class TaskListContainer extends Component {
    static contextType = storeContext;

    handleClickButtonDelete = (taskId) => () => {
        const {deleteTask} = this.context;
        deleteTask(taskId);
    }
    handleClickButtonActivate = (taskId) => () => {
        const {setTaskStatus} = this.context;
        setTaskStatus(taskId, 'active');
    }
    handleClickButtonArchive = (taskId) => () => {
        const {setTaskStatus} = this.context;
        setTaskStatus(taskId, 'archived');
    }
    handleClickButtonDone = (taskId) => () => {
        const {setTaskStatus} = this.context;
        setTaskStatus(taskId, 'done');
    }

    render() {
        const taskItems = this.context.filteredTasks.map(({id, title, status}, index) => (
            <RouterConsumer key={id}>
                {({navigate}) => {
                    const handleClickButtonEdit = () => {
                        navigate('editPage', {pageId: id})
                    };

                    return (
                        <TaskItem
                            darkBg={index % 2 !== 0}
                            onDeleteTask={this.handleClickButtonDelete(id)}
                            onActivateTask={this.handleClickButtonActivate(id)}
                            onArchiveTask={this.handleClickButtonArchive(id)}
                            onDoneTask={this.handleClickButtonDone(id)}
                            onEditTask={handleClickButtonEdit}
                            status={status}
                        >{title}</TaskItem>
                    )
                }}
            </RouterConsumer>
        ));

        return <TaskList {...this.props}>{taskItems}</TaskList>
    }
}
