import { createStore } from 'redux';
import rootReducer from './rootReducer';
//import reducer from './reducers/jobs';

// const initialState = {
//     jobs: {
//       priorityFilter: 'all',
//       statusFilter: 'all',
//       dateFilter: ''
//     }
// };

const store = createStore(
  rootReducer,
  //initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
export default store;
