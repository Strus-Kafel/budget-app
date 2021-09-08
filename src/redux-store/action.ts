const Types = {
    SET_AUTH_KEY: "SET_AUTH_KEY",
    SET_LOGIN: "SET_LOGIN",
    SET_DATE : "SET_DATE",
    SET_MONTH_DATA : "SET_MONTH_DATA"
  };
  // actions
  const setAuthKey = (key :any) =>({
    type : Types.SET_AUTH_KEY,
    key: key
  })
  const setLogin = (login :string) => ({
    type: Types.SET_LOGIN,
    login: login 
  });
  const setDate = (date :Date) =>({
    type : Types.SET_DATE,
    date: date
  })
  const setMonthData = (data :any) =>({
    type : Types.SET_MONTH_DATA,
    monthData: data
  })

  const exportedObject ={
    setAuthKey,
    setLogin,
    setDate,
    setMonthData,
    Types
  }
  export default exportedObject