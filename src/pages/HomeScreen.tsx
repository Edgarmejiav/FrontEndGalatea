import { Container, Grid, Typography, Box, CardMedia } from "@mui/material";
import React from "react";
import { TabsTheatre } from "../components/Home/TabsTheatre";

export const HomeScreen = () => {
  const nextEvent = [
    {
      yearN: "3",
      yearS: "años",
    },
    {
      theaterPlaysN: "12",
      theaterPlaysS: "Obras",
    },
    {
      shortFilmN: "6",
      shortFilmS: "años",
    },
  ];
  return (
    <Grid container>
      <Grid item lg={12} xs={12} container justifyContent="center">
        <Typography variant="h2" m={4}>
          Quienes somos
        </Typography>
        <Typography variant="h6" mb={10}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <TabsTheatre />
      </Grid>
      <Grid item lg={12} xs={12} container justifyContent="center">
        <Grid
          item
          lg={4}
          mt={5}
          container
          direction="column"
          alignItems="center"
        >
          <Typography variant="h1">2</Typography>
          <Typography variant="h2">años</Typography>
        </Grid>
        <Grid
          item
          lg={4}
          mt={5}
          container
          direction="column"
          alignItems="center"
        >
          <Typography variant="h1">3</Typography>
          <Typography variant="h2">obras</Typography>
        </Grid>
        <Grid
          item
          lg={4}
          mt={5}
          container
          direction="column"
          alignItems="center"
        >
          <Typography variant="h1">6</Typography>
          <Typography variant="h2">cortos</Typography>
        </Grid>
      </Grid>
      <Grid item lg={12} xs={12} container justifyContent="center">
        <Grid item lg={12} container justifyContent="center">
          <Typography variant="h2" m={10}>
            Alidos estratégicos
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignContent="space-around"
          style={{ height: "280px", overflowX: "auto" }}
        >
          {Array.apply(null, Array(100)).map((t: any, index: number) => {
            return (
              <Grid key={index} style={{ paddingRight: "30px" }}>
                <>{index + 1}</>
                <CardMedia
                  style={{ borderRadius: "150px" }}
                  component="img"
                  height="250px"
                  width="250px"
                  image="https://images.pexels.com/photos/8181334/pexels-photo-8181334.jpeg"
                  alt="Paella dish"
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid item lg={12} xs={12} container justifyContent="center">
        <Grid item lg={12} container justifyContent="center">
          <Typography variant="h2" m={10}>
            Próximo evento
          </Typography>
        </Grid>
        <Grid item lg={3} container direction="column" alignItems="center">
          <Typography variant="h1">38</Typography>
          <Typography variant="h2">Dias</Typography>
        </Grid>
        <Grid item lg={3} container direction="column" alignItems="center">
          <Typography variant="h1">23</Typography>
          <Typography variant="h2">Horas</Typography>
        </Grid>
        <Grid item lg={3} container direction="column" alignItems="center">
          <Typography variant="h1">10</Typography>
          <Typography variant="h2">Minutos</Typography>
        </Grid>
        <Grid item lg={3} container direction="column" alignItems="center">
          <Typography variant="h1">23</Typography>
          <Typography variant="h2">Segundos</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
