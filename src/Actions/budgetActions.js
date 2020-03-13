export const UPDATE_BUDGET = 'UPDATE_BUDGET';

const updateBudget = budget => ({
    type: UPDATE_BUDGET,
    budget
});

export const userUpdateBudget = budget => dispatch => dispatch(updateBudget(budget));