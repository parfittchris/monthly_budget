export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


const loginUser = user => ({
    type: LOGIN,
    user
});
export const login = user => dispatch => dispatch(loginUser(user));



const logoutUser = () => ({
    type: LOGOUT,
});
export const logout = () => dispatch => dispatch(logoutUser());