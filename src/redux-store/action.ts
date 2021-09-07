const Types = {
    SET_AUTH_KEY: "SET_AUTH_KEY",
    SET_LOGIN: "SET_LOGIN"
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

  const exportedObject ={
    setAuthKey,
    setLogin,
    Types
  }
  export default exportedObject