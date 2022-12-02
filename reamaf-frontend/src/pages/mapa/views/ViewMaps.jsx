import { Grid, Paper } from "@mui/material";

const ViewMaps = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        ></Paper>
      </Grid>
    </Grid>
  );
};

export default ViewMaps;
