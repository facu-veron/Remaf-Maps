import Typography from "@mui/material/Typography";

export const Title = ({ value }) => {
  return (
    <Typography component="h2" variant="h5" color="primary" gutterBottom>
      {value}
    </Typography>
  );
};
