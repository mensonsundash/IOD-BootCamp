import { Grid, Card, CardContent, Typography } from "@mui/material";

/*
  Displays analytics summary
  Receives calculated values as props
*/
function SummaryCards({
  totalSpending,
  highestCategory,
  monthlySavings,
  monthsToGoal,
}) {
  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      {/* Total Spending */}
      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">Total Monthly Spending</Typography>
            <Typography variant="h6" color="error">
              ${totalSpending}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Highest Category */}
      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">Highest Category</Typography>
            <Typography variant="h6">
              {highestCategory?.category || "N/A"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Monthly Savings */}
      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">Monthly Savings</Typography>
            <Typography
              variant="h6"
              color={monthlySavings >= 0 ? "primary" : "error"}
            >
              ${monthlySavings}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Deposit Forecast */}
      <Grid item xs={12} md={3}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">Months to Deposit Goal</Typography>
            <Typography variant="h6">
              {monthsToGoal ? `${monthsToGoal} months` : "N/A"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SummaryCards;
