import React from 'react';
import Task from './Task';

const TaskList = props => (
    <div className="task-list">
      <div className="task-list-title">
        <strong>{props.status}</strong>
      </div>
      {props.tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          onStatusChange={props.onStatusChange} 
          onRemoveTask={props.onRemoveTask}
        />
      ))}
    </div>
);

export default TaskList;