import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: "",
      description: ""
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { title, dueDate, description } = this.state;

    if (!title || !dueDate) {
      alert("Please provide a title and a due date.");
      return;
    }

    const newTask = { title, dueDate, description };
    this.props.addTask(newTask);
    this.setState({ title: "", dueDate: "", description: "" });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value } as Pick<
      TaskFormState,
      keyof TaskFormState
    >);
  };

  render() {
    const { title, dueDate, description } = this.state;
    const isSubmitDisabled = !title || !dueDate;

    return (
      <form onSubmit={this.addTask}>
        <div className="TaskItem">
          <label htmlFor="todoTitle">Task:</label>
          <input
            type="text"
            id="todoTitle"
            name="title"
            className="border border-black"
            value={title}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="TaskItem">
          <label htmlFor="todoDueDate">Due Date:</label>
          <input
            type="date"
            id="todoDueDate"
            name="dueDate"
            className="border border-black"
            value={dueDate}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="TaskItem">
          <label htmlFor="todoDescription">Description:</label>
          <input
            type="text"
            id="todoDescription"
            name="description"
            className="border border-black"
            value={description}
            onChange={this.handleChange}
          />
        </div>

        <button id="addTaskButton" type="submit" disabled={isSubmitDisabled}>
          Add item
        </button>
      </form>
    );
  }
}

export default TaskForm;
