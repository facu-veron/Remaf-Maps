import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

export const TextComponentPopup = ({ title, description }) => {
  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      <Typography
        sx={{ p: 0, m: 0 }}
        component="h2"
        variant="h5"
        color="primary"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography sx={{ p: 0, m: 0 }} component="h2" variant="h5" gutterBottom>
        {description}
      </Typography>
    </Stack>
  );
};
