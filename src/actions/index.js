import * as api from '../api'; 

let _id = 0;
export function uniqueId() {
  return _id++;
}

function fetchTasksStarted() {
  return {
    type: 'FETCH_TASKS_STARTED'
  };
}

function fetchTasksSucceeded(tasks) {
  return {
    type: "FETCH_TASKS_SUCCEEDED",
    payload: {
      tasks
    }
  };
}

function fetchTasksFailed(error) {
  return {
    type: 'FETCH_TASKS_FAILED',
    payload: {
      error
    }
  }
}

function removeTasksStarted(id) {
  return {
    type: 'REMOVE_TASKS_STARTED',
    payload: {
      id
    }
  };
}

function removeTasksSucceeded(id, resp) {
  return {
    type: 'REMOVE_TASKS_SUCCEEDED',
    payload: {
      id,
      resp
    }
  };
}

function removeTasksFailed(error, id) {
  return {
    type: 'REMOVE_TASKS_FAILED',
    payload: {
      error,
      id
    }
  }
}


export function fetchTasks() {
  return dispatch => {
    dispatch(fetchTasksStarted());

    api.fetchTasks().then(resp => {
      setTimeout(() => {
        dispatch(fetchTasksSucceeded(resp.data));
      }, 1000);
      //throw new Error('Oh noes! Unable to fetch tasks!');
    }).catch(err => {
      dispatch(fetchTasksFailed(err.message));
    });
  };
}


function createTaskSucceeded(task) {
  return {
    type: 'CREATE_TASK_SUCCEEDED',
    payload: task
  };

}


export function createTask({ title, description, status = "Unstarted" }) {
  return dispatch => {
    api.createTask({ title, description, status }).then(resp => {
      dispatch(createTaskSucceeded(resp.data));
    })
  };
}


function editTaskSucceeded(task) {
  return {
    type:  'EDIT_TASK_SUCCEEDED',
    payload: {
      task
    }
  };
}


export function editTask(id, params = {}) {
  return (dispatch, getState) => {
    const task = getTaskById(getState().tasks, id);
    const updatedTask = Object.assign({}, task, params);
    api.editTask(id, updatedTask).then(resp => {
      dispatch(editTaskSucceeded(resp.data));
    });
  };
}


function getTaskById(tasks, id) {
  return tasks.tasks.find(task => task.id == id);
}



export function removeTask(id) {
  return dispatch => {
    dispatch(removeTasksStarted(id));
    api.removeTask(id).then(resp => {
      dispatch(removeTasksSucceeded(id, resp));
      dispatch(fetchTasks());
    }).catch(err => {
      dispatch(removeTasksFailed(err.message, id));
    });
  };
}



// export function createTask({ title, description }) {
//   return {
//     type: 'CREATE_TASK',
//     payload: {
//       id: uniqueId(),
//       title,
//       description,
//       status: 'Unstarted',
//     },
//   };
// }



// export function editTask(id, params = {}) {
//     return {
//       type: 'EDIT_TASK',
//       payload: {
//         id,
//         params
//       }
//     };
// }
