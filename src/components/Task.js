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
            <div id={props.task.id} className="task-body">{props.task.description}</div>
            <div>
                <button onClick={onToggle}>Toggle</button>
                <button onClick={onRemoveTask}>Remove</button>
            </div>
        </div>
    );
    
    function onStatusChange(e) {
        props.onStatusChange(props.task.id, e.target.value)
    }

    function onRemoveTask() {
        console.log("Clicked!!", );
        props.onRemoveTask(props.task.id);
    }

    function onToggle() {
        var x = document.getElementById(props.task.id);
        console.log(x);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }



}


export default Task;