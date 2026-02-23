import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ExpenseList() {
  const { expenses, deleteExpense } = useContext(BudgetContext);

  return (
    <List sx={{ mt: 2 }}>
      {expenses.map((expense) => (
        <ListItem
          key={expense.id}
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => deleteExpense(expense.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={expense.category}
            secondary={`$${expense.amount}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default ExpenseList;