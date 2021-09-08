import ACTIONS from "./action";

interface DefaultState {
  authKey: any,
  login: string,
  date: Date,
  monthData : any
}

const defaultState :DefaultState = {
  authKey: "",
  login: "",
  date: new Date(),
  monthData={}
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
        //console.log(state)
        return {
          ...state,
          login: action.login
        }
    }
    case ACTIONS.Types.SET_DATE: {
      return {
        ...state,
        date: action.date
      }
    }
    case ACTIONS.Types.SET_MONTH_DATA: {
      return {
        ...state,
        monthData: action.monthData
      }
      
    }
    default:
      return state;
  }
};

export default Reducer;