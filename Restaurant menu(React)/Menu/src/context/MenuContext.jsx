import { createContext, useContext, useReducer } from "react";

const MenuContext = createContext();

const initialState = {
  meals: [],
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
      error: "",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      ...state,
      loading: false,
      meals: action.payload,
    };
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MenuContext);
};
