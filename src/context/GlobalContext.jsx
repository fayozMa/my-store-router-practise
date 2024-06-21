import { createContext, useEffect, useReducer } from "react";
export const GlobalContext = createContext();
const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOG_IN":
      return { ...state, user: payload };
    case "LOG_OUT":
      return { ...state, user: null };
    case "AUTH_CHANGE":
      return { ...state, isAuthChange: true };
    case "ADD_PRODUCT":
      return { ...state, product: payload };
    case "CHANGE_TOTAL":
        return {...state,total:payload}
    default:
      return state;
  }
};

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    product: [],
    total: 0,
    isAuthChange: false,
  } );
  };
  useEffect(()=>{
    localStorage.setItem("mystore", JSON.stringify(state))
  },[state])
  return (
    <GlobalContext.Provider value={{ ...state, dispatch, addProduct }}>
      {children}
    </GlobalContext.Provider>
  );
export default GlobalContextProvider;
