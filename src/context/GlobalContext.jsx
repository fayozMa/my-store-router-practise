import { createContext, useEffect, useReducer } from "react";
import { produce } from "immer";
export const GlobalContext = createContext();
function stateFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("mystore")) || {
      user: null,
      product: [],
      total: 0,
      isAuthChange: false,
    }
  );
}
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
  const [state, dispatch] = useReducer(changeState, stateFromLocalStorage());
  const addProduct = (prod) => {
    if (state.products.find((product) => product.id == prod.id)) {
      function toggleItem(state, prod) {
        return produce(state, (draft) => {
          const product = draft.products.find((item) => item.id === prod.id);
          product.amount = product.amount + prod.amount;
        });
      }
      const result = toggleItem(state, prod);
      dispatch({ type: "ADD_PRODUCT", payload: result.product });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: [...state.products, prod] });
    }
  };
  useEffect(()=>{
    localStorage.setItem("mystore", JSON.stringify(state))
  },[state])
  return (
    <GlobalContext.Provider value={{ ...state, dispatch, addProduct }}>
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalContextProvider;
