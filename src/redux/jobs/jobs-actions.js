import * as actionTypes from './jobs-types';

export const setPriorityFilter = (priority) => {
    return {
        type: actionTypes.SET_PRIORITY_FILTER,
        payload: {
            data: priority
        }
    }
}

export const setStatusFilter = (status) => {
    return {
        type: actionTypes.SET_STATUS_FILTER,
        payload: {
            data: status
        }
    }
}