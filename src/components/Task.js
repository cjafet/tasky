<<<<<<< HEAD
import React from 'react';

const TASK_STATUSES = [
    'Unstarted',
    'In Progress',
    'Completed'
];

const Task = props => { 
    return (
        <div className="task">
            <div className="task-header">
            <div>{props.task.title}</div>
            <select value={props.task.status} onChange={onStatusChange}>
            {TASK_STATUSES.map(status => (
                <option key={status} value={status}>{status}</option>
            ))}
            </select>
            </div>
            <hr />
            <div className="task-body">{props.task.description}</div>
        </div>
    );
    
    function onStatusChange(e) {
        props.onStatusChange(props.task.id, e.target.value)
    }
}


export default Task;
=======
import React from "react";
import './Task.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faComments, faEdit } from "@fortawesome/free-solid-svg-icons";


const Task = props => {
  const classes = `${props.task.color} Tasky`;
  return (
      <ul className={classes}>
        {/* <li><FontAwesomeIcon icon={['fas', 'code']} /></li> */}
        <li>{props.task.title}</li>
        <li>{props.task.content}</li>
        <li>
            <ul className="CommentIcon">
                <li><FontAwesomeIcon icon={faComments} /></li>
            </ul>
        </li>
      </ul>
  );
};

export default Task;
>>>>>>> 4135f17c1a68fee23c8b19064fcb8933ec5589bd
