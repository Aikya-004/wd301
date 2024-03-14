import React from "react";
import TaskCard from "./TaskCard";
import './TaskCard.css'

function App() {
  return (
    <div className="flex flex-col items-center">
       <div>
        <div className="ml-12 mt-4">
         <h1 className="text-3xl font-bold leading-loose">Smarter Tasks</h1>
         <p><span className="font-bold ">Project:</span> Graduation Final Year Project (CBIT College Website)</p>
         </div>
         <div className="flex p-8 ">
           <div className="task-list mr-4 p-4">
             <h1 className="flex justify-center font-bold p-2">Pending</h1>
             <TaskCard title="Build the website using static content" dueDate="10th April" assigneeName="Rohit.S" />
             <TaskCard title="Add Blog" dueDate="22nd March" assigneeName="Rohit.M" />
             <div className="next">
              <p>+ Next</p>
             </div>
           </div>
           <div className="task-list p-4">
             <h1 className="flex justify-center font-bold p-2">Done</h1>
             <TaskCard title="Style the content" completedDate="10th April" assigneeName="Rohit.S" />
             <TaskCard title="Get the Approval" completedDate="20th April" assigneeName="Rohit.M" />
           </div>
         </div>
      </div>
    </div>
  );
}

export default App;
