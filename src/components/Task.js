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
