import { useState, useContext } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { BudgetContext } from "../context/BudgetContext";

function ExpenseForm() {
  const { addExpense } = useContext(BudgetContext);

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!category || !amount) return;

    const newExpense = {
      id: Date.now(),
      category,
      amount: Number(amount),
    };

    addExpense(newExpense);
    setCategory("");
    setAmount("");
  };

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          fullWidth
          type="number"
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Grid>

      <Grid item xs={2}>
        <Button
          variant="contained"
          fullWidth
          sx={{ height: "100%" }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
}

export default ExpenseForm;
