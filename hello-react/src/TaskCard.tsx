import React from 'react';
import './TaskCard.css'
interface Task{
  title:string;
  assigneeName:string;
  dueDate:string;
  completedDate:string;

}
const TaskCard = (props) => {
  console.log(props)
  return (
    <div className='TaskItem m-4'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.completedDate ? (
        <>
          <p>Completed on: {props.completedDate}</p>
          <p>Assignee: {props.assigneeName}</p>
        </>
      ) : (
        <>
          <p>Due Date: {props.dueDate}</p>
          <p>Assignee: {props.assigneeName}</p>
        </>
      )}
    </div>
  )
}

export default TaskCard
