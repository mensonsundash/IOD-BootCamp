import { Container, Typography, Paper, TextField, Grid } from "@mui/material";
import { useContext, useState } from "react";
import { BudgetContext } from "../context/BudgetContext";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCards from "../components/SummaryCards";
import useBudgetAnalysis from "../hooks/useBudgetAnalysis";

function Dashboard() {
  const { expenses } = useContext(BudgetContext);

  // Financial input states
  const [income, setIncome] = useState(5000);
  const [depositGoal, setDepositGoal] = useState(100000);
  const [currentSavings, setCurrentSavings] = useState(20000);

  // Use custom hook for analytics
  const analysis = useBudgetAnalysis(
    expenses,
    income,
    depositGoal,
    currentSavings
  );

  return (
    <Container sx={{ mt: 8, my:10 }}>
      <Typography variant="h4" gutterBottom>
        Smart Budget Dashboard
      </Typography>

      {/* Financial Inputs */}
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Monthly Income"
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Deposit Goal"
              type="number"
              value={depositGoal}
              onChange={(e) => setDepositGoal(Number(e.target.value))}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Current Savings"
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
            />
          </Grid>
        </Grid>

        {/* Analytics Summary */}
        <SummaryCards {...analysis} />

        {/* Expense Management */}
        <ExpenseForm />
        <ExpenseList />
      </Paper>
    </Container>
  );
}

export default Dashboard;