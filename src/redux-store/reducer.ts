import ACTIONS from "./action";

interface DefaultState {
  authKey: any,
  login: string
}

const defaultState :DefaultState = {
  authKey: "",
  login: ""
};

const Reducer =  (state = defaultState, action :any) => {
  switch (action.type) {
    case ACTIONS.Types.SET_AUTH_KEY: {
      //console.log(action);
      return {
        ...state,
        authKey: action.authKey
      }
    }
    case ACTIONS.Types.SET_LOGIN: {
      let id = (action.info.id >= 1) ? ((action.info.id <= 898) ? action.info.id : 898) : 1;
        //console.log(state)
        return {
          ...state,
          login: action.login
        }
    }
    default:
      return state;
  }
};

export default Reducer;