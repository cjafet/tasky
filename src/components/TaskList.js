import React, { Component } from "react";
import Task from "./Task";
import './TaskList.css';

const TASK_COLORS = [
    'Green',
    'Blue',
    'Purple'
];

let id = 0;

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t: "",
      c: "",
      color: "",
      tasks: [
        {
          id: id++,
          color: TASK_COLORS[0],
          title: "Learn Redux",
          content: "Create a simple App!",
          comments: []
        }
      ]
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  onTitleChange = event => {
    console.log(event.target.value);
    this.setState({ t: event.target.value });
  }

  onContentChange = event => {
    this.setState({ c: event.target.value });
  }

  onColorChange = event => {
      this.setState({color: event.target.value});
  }

  addTask = e => {
    e.preventDefault();
    (this.state.t != "" && this.state.c != "" && this.state.color) ?
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: id++,
          color: this.state.color,
          title: this.state.t,
          content: this.state.c
        }
      ]
    }) :
    console.log("Task is empty.")
  }

  render() {
    return (
      <div>
        <div className="TaskyForm">
          <form onSubmit={this.addTask}>
            <input
              type="text"
              placeholder="Name your Task"
              value={this.state.t}
              onChange={this.onTitleChange}
            />
            <input
              type="text"
              placeholder="Describe your Task"
              value={this.state.c}
              onChange={this.onContentChange}
            />
            <select value={this.state.color} onChange={this.onColorChange}>
            {TASK_COLORS.map(color => (
                <option key={color} value={color}>{color}</option>
            ))}
            </select>
            <input type="submit" />
          </form>
        </div>
        <div className="Flex">
          {this.state.tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div>
    );
  }
}

export default TaskList;
