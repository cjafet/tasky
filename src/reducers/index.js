import { uniqueId } from '../actions'; 


// // Initial (default) state provided for the reducers
const initialState = {
    tasks: [],
    isLoading: false,
    error: null
};

export default function tasks(state = initialState, action) {

    if (action.type === 'FETCH_TASKS_FAILED') {
        return {
            ...state,
            isLoading: false,
            error: action.payload.error
        };
    }

    if (action.type === 'FETCH_TASKS_STARTED') {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === 'REMOVE_TASKS_STARTED') {
        return {
            ...state,
            isLoading: true
        };
    }


    if (action.type === 'REMOVE_TASKS_FAILED') {
        return {
            ...state,
            isLoading: false,
            error: action.payload.error
        };
    }


    if (action.type === 'FETCH_TASKS_SUCCEEDED') {
        return { 
            ...state,
            isLoading: false,
            tasks: action.payload.tasks 
        };
    }

    if (action.type === 'CREATE_TASK_SUCCEEDED') {
        return { 
            ...state,
            tasks: state.tasks.concat(action.payload) // concat new task in the current statel
        }; 
    }

    if (action.type === 'EDIT_TASK_SUCCEEDED') {
        const { payload } = action;
        const nextTasks = state.tasks.map(task => {
            if (task.id == payload.task.id) {
                return payload.task;
            }

            return task;
        }); 
        return {
            ...state,
            tasks: nextTasks
        };
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