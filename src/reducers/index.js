import { uniqueId } from '../actions'; 


// // Initial (default) state provided for the reducers
// const mockTasks = [
//     {
//       id: uniqueId(),
//       title: 'Learn Redux',
//       description: 'The store, actions, and reducers, oh my!',
//       status: 'Completed',
//     },
//     {
//       id: uniqueId(),
//       title: 'Peace on Earth',
//       description: 'No big deal.',
//       status: 'In Progress',
//     },
// ];

export default function tasks(state = { tasks: [] }, action) {

    if (action.type === 'FETCH_TASKS_SUCCEEDED') {
        return { tasks: action.payload.tasks };
    }

    
    if (action.type === 'CREATE_TASK') {
        return { tasks: state.tasks.concat(action.payload) };
    }
    
    
    if (action.type === 'EDIT_TASK') {
        const { payload } = action;
        return {
            tasks: state.tasks.map(task => {
                if (task.id === payload.id) {
                    return Object.assign({}, task, payload.params);
                }
    
                return task;
            })
        };
    } 
    
    // fall back that return the given state in case none of the actions is handled
    return state;
}