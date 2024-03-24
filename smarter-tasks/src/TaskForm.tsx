import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  dueDate: Date | null;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: null,
      description: ""
    };
    // Binding the addTask method to this instance
    this.addTask = this.addTask.bind(this);
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (this.state.title.trim() === "" || !this.state.dueDate) {
      // Title or due date is empty, prevent adding task
      return;
    }
    const newTask = {
      title: this.state.title,
      dueDate: this.state.dueDate.toISOString().split('T')[0], // Extract only date part
      description: this.state.description
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: null });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };

  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ dueDate: new Date(event.target.value) });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="TaskItem">
          <label htmlFor="todoTitle">Task:</label>
          <input
            type="text"
            id="todoTitle"
            className="border border-black"
            value={this.state.title}
            onChange={this.titleChanged}
            required
          />
        </div>
        <div className="TaskItem">
          <label htmlFor="todoDueDate">Due Date:</label>
          <input
            type="date"
            id="todoDueDate"
            className="border border-black"
            value={this.state.dueDate ? this.state.dueDate.toISOString().split('T')[0] : ''} // Display only date part
            onChange={this.dueDateChanged}
            required
          />
        </div>
        <div className="TaskItem">
          <label htmlFor="todoDescription">Description:</label>
          <input
            type="text"
            id="todoDescription"
            className="border border-black"
            value={this.state.description}
            onChange={this.descriptionChanged}
          />
        </div>
        <button id="addTaskButton" type="submit">
          Add item
        </button>
      </form>
    );
  }
}

export default TaskForm;
