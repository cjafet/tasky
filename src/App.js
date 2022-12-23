import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksPage from './components/TasksPage';
import { createTask, editTask, fetchTasks, removeTask } from './actions';
import FlashMessage from './components/FlashMessage';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  }

  
  onRemoveTask = (id) => {
    this.props.dispatch(removeTask(id));
  }

  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, { status }));
  }

  render() {
    console.log('props from App: ', this.props);
    return (
      <div className="container">
        { this.props.error && 
        <FlashMessage message={this.props.error} />}
        <div className="main-content">
          <TasksPage 
            tasks={this.props.tasks} 
            onCreateTask={this.onCreateTask} 
            onRemoveTask={this.onRemoveTask}
            onStatusChange={this.onStatusChange} 
            isLoading={this.props.isLoading}
          />
        </div>
      </div>
    );
  }
}

// Use to pass only relevant data to the component as props 
function mapStateToProps(state) {
  const { tasks, isLoading, error } = state.tasks;
  return { tasks, isLoading, error };
}

// Get data from the redux store
export default connect(mapStateToProps)(App);
