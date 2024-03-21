import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
  }

interface TaskFormState {
    title: string;
    dueDate:string;
    description?:string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
        title: "",
        dueDate:"",
        description:""
      }
    // Binding the addTask method to this instance
    this.addTask = this.addTask.bind(this);
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      dueDate:this.state.dueDate,
      description:this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
    this.setState({ description: "" });
    this.setState({ dueDate: "" });

  };

  // Method to handle form submission

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value)
    this.setState({ dueDate: event.target.value });
   
};
   descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(event.target.value)
  this.setState({ description: event.target.value });
  
};

  inputRef = React.createRef<HTMLInputElement>();

  render() {
    return (
        
      <form onSubmit={this.addTask}>
        <div className="TaskItem">
        <label htmlFor="todoTitle">Task:</label>
        <input type="text" id="todoTitle" className="border border-black" value={this.state.title} onChange={this.titleChanged} required/>
        </div>
        <div className="TaskItem">
        <label htmlFor="todoDueDate">Due Date:</label>
        <input type="text" id="todoDueDate" className="border border-black" value={this.state.dueDate} onChange={this.dueDateChanged} required/>
        </div>
        <div className="TaskItem">
        <label htmlFor="todoDescription">Description:</label>
        <input type="text" id="todoDescription" className="border border-black" value={this.state.description} onChange={this.descriptionChanged} />
        </div>
      

        <button id="addTaskButton" type="submit">Add item</button>
       

      </form>
    );
  }
}

export default TaskForm;
