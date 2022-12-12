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
import { Title } from "../../../../components/common/Title";

import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import { get_estacion } from "../../../../actions/estaciones_action";

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

const labels = ["Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


 const PrecipitationGraph = (props) => {
  const [estacion, setEstacion] = useState([0])

  useEffect( () => {
    console.log(props);
    props.get_estacion(3 , "2022/05/01", "2022/11/30").then( (res) => {
      console.log(res)
      setEstacion(res)
    })
  }, [])

  let data = {
    labels,
    datasets: [
         
      {
        label: "Precipitación",
        data: estacion.map( elem => elem.precipitacion ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      
    ],
  };
  return (
    <Grid item xs={12} md={8} lg={9}>
      <Paper
        sx={{
          p: 2,
          mt: 10,
          display: "flex",
          flexDirection: "column",
          height: "auto",
        }}
      >
        <Title value="Precipitacion (%)" />
        <Line options={options} data={data} />
      </Paper>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, {get_estacion})(PrecipitationGraph)
