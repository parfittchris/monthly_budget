import { LOGOUT, LOGIN } from '../Actions/sessionActions';
import { merge } from 'lodash';

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGIN:
            return merge({}, state, action.user)
        case LOGOUT:
            return {}
        default:
            return state
    }
}

export default sessionReducer;