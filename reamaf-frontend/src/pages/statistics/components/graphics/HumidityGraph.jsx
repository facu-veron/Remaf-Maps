import { Grid, Paper } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import { Title } from "../../../../components/common/Title";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Temperatura maxima",
      data: labels.map(() => faker.datatype.number({ min: 20, max: 35 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Temperatura minima",
      data: labels.map(() => faker.datatype.number({ min: -3, max: 20 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export const HumidityGraph = () => {
  return (
    <Grid item xs={12} md={8} lg={12}>
      <Paper
        sx={{
          p: 2,
          mt: 10,
          display: "flex",
          flexDirection: "column",
          height: "auto",
        }}
      >
        <Title value="Humedad maxima y minima  (Hr) " />
        <Line options={options} data={data} />
      </Paper>
    </Grid>
  );
};
