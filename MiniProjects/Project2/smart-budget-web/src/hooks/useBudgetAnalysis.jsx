import { useReducer, useEffect } from "react";

// Initial state for analysis
const initialState = {
  totalSpending: 0,
  highestCategory: null,
  categoryBreakdown: {},
  monthlySavings: 0,
  monthsToGoal: null,
};

// Reducer manages analytics state transitions
function analysisReducer(state, action) {
  switch (action.type) {
    case "CALCULATE":
      return { ...action.payload }; // replace entire analysis state
    default:
      return state;
  }
}

/*
  Custom Hook: useBudgetAnalysis
  - Calculates spending insights
  - Accepts expenses array
  - Accepts income + depositGoal
*/
function useBudgetAnalysis(expenses, income, depositGoal, currentSavings) {
  const [state, dispatch] = useReducer(analysisReducer, initialState);

  useEffect(() => {
    if (!expenses) return;

    // ### Total Spending ###
    const totalSpending = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    // ### Highest Spending Category ###
    const highestCategory = expenses.reduce(
      (max, exp) => (exp.amount > (max?.amount || 0) ? exp : max),
      null,
    );

    // ### Category Breakdown ###
    const categoryBreakdown = expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {});

    // ### Monthly Savings ###
    const monthlySavings = income - totalSpending;

    // ### Deposit Forecast ###
    let monthsToGoal = null;

    if (monthlySavings > 0 && depositGoal > currentSavings) {
      monthsToGoal = Math.ceil((depositGoal - currentSavings) / monthlySavings);
    }

    // Dispatch calculated results
    dispatch({
      type: "CALCULATE",
      payload: {
        totalSpending,
        highestCategory,
        categoryBreakdown,
        monthlySavings,
        monthsToGoal,
      },
    });
  }, [expenses, income, depositGoal, currentSavings]);

  return state;
}

export default useBudgetAnalysis;
