import { USER_LOGIN } from '../../actions/actionTypes';
const initialState = {
  user: {},
};

function userLogin(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default userLogin;
