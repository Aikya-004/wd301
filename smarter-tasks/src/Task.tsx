import "./TaskCard.css";
import { TaskItem } from "./types";

const Task = (props: TaskItem) => {
  console.log(props.id);
  return (
    <li className="flex w-fit">
      <div className="TaskItem  px-5 bg-white ">
        <div className="flex">
          <h2 className="text-xl font-bold my-1">
            <a href={`/tasks/${props.id}`}>{props.title} </a>
          </h2>
        </div>

        <p className="text-lg text-gray-500">
          {" "}
          <strong>Due date:</strong>
          {props.dueDate}
        </p>
        <p className="text-lg text-gray-500">Description:{props.description}</p>
      </div>
    </li>
  );
};

export default Task;