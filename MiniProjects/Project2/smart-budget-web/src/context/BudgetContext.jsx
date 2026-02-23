import { createContext, useReducer, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

// Create budget context
export const BudgetContext = createContext();

// Reducer handles expense actions
function budgetReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];

    case "DELETE_EXPENSE":
      return state.filter((exp) => exp.id !== action.payload);

    case "SET_EXPENSES":
      return action.payload;

    default:
      return state;
  }
}

export function BudgetProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [expenses, dispatch] = useReducer(budgetReducer, []);

  // Load expenses for logged in user
  useEffect(() => {
    if (user) {
      const stored =
        JSON.parse(localStorage.getItem(`expenses_${user.name}`)) || [];
      dispatch({ type: "SET_EXPENSES", payload: stored });
    }
  }, [user]);

  // Save expenses when they change
  useEffect(() => {
    if (user) {
      localStorage.setItem(`expenses_${user.name}`, JSON.stringify(expenses));
    }
  }, [expenses, user]);

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: expense });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  return (
    <BudgetContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </BudgetContext.Provider>
  );
}
