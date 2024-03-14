import React from 'react';
import './TaskCard.css';

interface TaskProps {
  title: string;
  assigneeName: string;
  dueDate?: string;
  completedAtDate?: string;
}

const TaskCard: React.FC<TaskProps> = (props) => {
  const { title, assigneeName, dueDate, completedAtDate } = props;

  return (
    <div className='TaskItem m-4'>
      <h2 className="text-xl font-bold">{title}</h2>
      {completedAtDate ? (
        <>
          <p>Completed on: {completedAtDate}</p>
          <p>Assignee: {assigneeName}</p>
        </>
      ) : (
        <>
          {dueDate && <p>Due on: {dueDate}</p>}
          <p>Assignee: {assigneeName}</p>
        </>
      )}
    </div>
  );
};

export default TaskCard;
