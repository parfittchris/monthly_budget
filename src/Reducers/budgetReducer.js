import { UPDATE_BUDGET } from '../Actions/budgetActions';
import { merge } from 'lodash';

const budgetReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_BUDGET:
            return merge({}, state, action.budget)
        default:
            return state
    }
}

export default budgetReducer;