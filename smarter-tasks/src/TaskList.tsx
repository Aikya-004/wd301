import Task from "./Task";
import { TaskItem } from "./types";
import './TaskCard.css';
interface Props {
  tasks: TaskItem[];
  onDeleteTask: (task: TaskItem) => void;
}

const TaskList = (props: Props) => {
  const { tasks, onDeleteTask } = props;

  const handleDeleteTask = (task: TaskItem) => {
    onDeleteTask(task);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, idx) => (
        <li key={idx} className="task-item">
          <Task
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
          />
          <button
            className="deleteTaskButton" id="addTaskButton"
            onClick={() => handleDeleteTask(task)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
