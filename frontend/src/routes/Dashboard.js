import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// import { ClickStats, OrderStats, RevenueStats } from "./DashboardStats";
import { BarChart } from "../components/Charts/BarChart";
import { LineChart } from "../components/Charts/LineChart";

import { CategoryScale } from "chart.js";
import "chart.js/auto";
import axios from "axios";

// BIG IMPORTANT PRIORITY ===>
// Figure out how to use chartjs
// Read documentation from them https://www.chartjs.org/docs/latest/getting-started/integration.html
// I left off there, but the goal is to manage to put in charts describing different statistics
// From the array 'statistics'
// <===

import { Line } from "react-chartjs-2";
import Container from "@mui/material/Container";

// Use axios to fetch the statistics from server;
// instead of using the array from dashboardstats.js

const Dashboard = () => {
  const [menusLeft, setMenusLeft] = useState(50);

  const [RevenueStats, setRevenueStats] = useState([]);
  const [OrderStats, setOrderStats] = useState([]);
  const [ClickStats, setClickStats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3434/api/restaurants")
      .then(function (response) {
        // handle success
        console.log(response.data[1].restaurantName);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3434/api/revenue-stats/646eb3a8b30795e61bc2a0de")
      .then(function (response) {
        // handle success
        console.log("2 revenue: ", response.data[2].revenue);
        console.log("Response data.length: ", response.data.length);
        const revenues = response.data.map(({ revenue }) => revenue);
        console.log("Revenues: ", revenues);
        const upToDateData = response.data.length - 1;
        setRevenueStats(
          RevenueStats.concat(response.data[upToDateData].revenue)
        );
        console.log("Revenue Stats: ", RevenueStats);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const [RevenueChartData, setRevenueChartData] = useState({
    labels: RevenueStats.map((data) => data.revenue),
    datasets: [
      {
        label: "Revenue",
        data: RevenueStats.map((data) => data.revenue),
        title: RevenueStats.title,
        backgroundColor: ["#7a2c2c"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [orderChartData, setOrderChartData] = useState({
    labels: OrderStats.map((data) => data.month),
    datasets: [
      {
        label: "Orders",
        data: OrderStats.map((data) => data.orders),
        title: OrderStats.title,
        backgroundColor: ["#7a2c2c"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [clickChartData, setClickChartData] = useState({
    labels: ClickStats.map((data) => data.month),
    datasets: [
      {
        label: "Clicks",
        data: ClickStats.map((data) => data.clicks),
        title: ClickStats.title,
        backgroundColor: [
          "#7a2c2c",
          "teal",
          "white",
          "black",
          "grey",
          "darkgrey",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // Here the user variable is just the username of the restaurant owner, currently it is
  // set to 'owner' before someone signs in!
  const user = `Owner`;
  return (
    <Container sx={{ bgcolor: "primary.grey", width: "100vw", height: "auto" }}>
      <Typography
        variant="h1"
        align="center"
        color="primary.white"
        gutterBottom
        sx={{ pt: 5, pb: 5 }}
        fontWeight={"bold"}
      >
        {" "}
        {user}'s Dashboard
      </Typography>
      <Typography variant="h3" align="center" sx={{ mb: "10vh" }}>
        General Statistics
      </Typography>
      <Paper
        elevation={20}
        sx={{
          height: "45vh",
          width: "auto",
          display: "flex",
          flexDirection: "row",
          flexGrow: "4",
          flexWrap: "wrap",
          pl: "1vw",
          pr: "1vw",
          ml: "-7.5vw",
          justifyContent: "space-between",
          alignSelf: "center",
          bgcolor: "primary.verydark",
          overflow: "hidden",
          mb: "100px",
        }}
      >
        <Paper elevation={10} sx={{ height: "20vh", mt: "12vh", ml: "7vw" }}>
          <BarChart chartData={RevenueChartData} />{" "}
        </Paper>

        <Paper elevation={10} sx={{ height: "20vh", mt: "12vh" }}>
          <BarChart chartData={orderChartData} />{" "}
        </Paper>

        <Paper
          elevation={10}
          sx={{ height: "20vh", mt: "12vh", mr: "7vw", width: "12vw" }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ m: "10", color: "primary.verydark" }}
          >
            Menus left
          </Typography>
          <Typography
            variant="h1"
            fontWeight={"bold"}
            align="center"
            sx={{ m: "10", color: "primary.verydark" }}
          >
            {menusLeft}{" "}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: "2vh", display: "center" }}
            onClick={() => {
              setMenusLeft(menusLeft - 1);
            }}
            component={Link}
            to={"../menu_builder"}
          >
            Make Menu
          </Button>
        </Paper>
      </Paper>
      <Paper
        elevation={20}
        align="center"
        sx={{
          height: "30vh",
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "space-around",
          flexWrap: "wrap",
          pl: "1vw",
          pr: "1vw",
          ml: "-7.5vw",
          bgcolor: "primary.verydark",
          overflow: "hidden",
          mb: "100px",
        }}
      >
        <Typography variant="h3" sx={{ mt: "-20" }}>
          {" "}
          Extra{" "}
        </Typography>
        <Paper
          sx={{
            my: 10,
            align: "center",
            position: "relative",
            height: "20vh",
            width: "20vw",
          }}
        >
          <LineChart
            chartData={clickChartData}
            options={{ maintainAspectRatio: false }}
          />
        </Paper>
      </Paper>
    </Container>
  );
};

export default Dashboard;
