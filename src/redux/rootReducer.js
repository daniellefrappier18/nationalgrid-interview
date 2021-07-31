import { combineReducers } from 'redux';
import jobsReducer from './jobs/jobs-reducers'


const rootReducer = combineReducers({
    jobs: jobsReducer
});

export default rootReducer;