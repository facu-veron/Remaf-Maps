import Typography from "@mui/material/Typography";

export const TextComponent = ({ value }) => {
  return (
    <>
      <Typography component="h2" variant="h6" gutterBottom>
        {value}
      </Typography>
    </>
  );
};
