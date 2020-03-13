import { combineReducers } from 'redux';

import sessionsReducer from './sessionReducer';
import budgetReducer from './budgetReducer';

const rootReducer = combineReducers({
    sessionsReducer,
    budgetReducer
});

export default rootReducer;