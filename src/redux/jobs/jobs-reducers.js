import * as actionTypes from './jobs-types';

const INITIAL_STATE = {
    priorityFilter: "all",
    statusFilter: "all",
}

const jobsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_PRIORITY_FILTER : {
            return {
                ...state,
                priorityFilter: action.payload.data
            }
        };
        case actionTypes.SET_STATUS_FILTER : {
            return {
                ...state,
                statusFilter: action.payload.data,
            }
        };
        default:
            return state;
    }
}

export default jobsReducer;