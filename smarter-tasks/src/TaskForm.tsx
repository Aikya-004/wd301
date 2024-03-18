import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
  }

interface TaskFormState {
    title: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
        title: ""
      }
    // Binding the addTask method to this instance
    this.addTask = this.addTask.bind(this);
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };

  // Method to handle form submission

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  inputRef = React.createRef<HTMLInputElement>();

  render() {
    return (
        
      <form onSubmit={this.addTask}>
        <label htmlFor="task">Task:</label>
        <input type="text" id="task" className="border border-black" value={this.state.title} onChange={this.titleChanged} />
        <button type="submit">Add item</button>
      </form>
    );
  }
}

export default TaskForm;
