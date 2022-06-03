import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

const Calculator = () => {
  const [state, setState] = useState();
  const [actions, setActions] = useState();
  const [another, setAnother] = useState();

  const handleplusClick = () => {
    setActions("+");
    setAnother(state);
    setState("");
  };
  const handleMinusClick = () => {
    setActions("-");
    setAnother(state);
    setState("");
  };
  const handleMulClick = () => {
    setActions("*");
    setAnother(state);
    setState("");
  };
  const handleDivClick = () => {
    setActions("/");
    setAnother(state);
    setState("");
  };
  const handleoneClick = () => {
    setState("1");
  };
  const handletwoClick = () => {
    setState("2");
  };
  const handlethreeClick = () => {
    setState("3");
  };
  const handlefourClick = () => {
    setState("4");
  };
  const handlefiveClick = () => {
    setState("5");
  };
  const handlesixClick = () => {
    setState("6");
  };
  const handlesevenClick = () => {
    setState("7");
  };
  const handleeightClick = () => {
    setState("8");
  };
  const handlenineClick = () => {
    setState("9");
  };
  const handlezerosClick = () => {
    setState("0");
  };
  const handlequalClick = () => {};

  const handleClearClick = () => {
    setState("");
    setAnother("");
    setActions("");
  };

  console.log(state);
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  let final = 0;
  switch (actions) {
    case "+": {
      final = Number(state) + Number(another);
      break;
    }
    case "-": {
      final = Number(state) - Number(another);
      break;
    }
    case "*": {
      final = Number(state) * Number(another);
      break;
    }
    case "/": {
      final = Number(state) / Number(another);
      break;
    }
  }

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "grey" }}
    >
      <Box
        width={400}
        height={500}
        bgcolor="skyblue"
        justifyContent="center"
        sx={{ border: "5px solid yellow", borderRadius: "20px" }}
      >
        <Box
          p={2}
          style={{ backgroundColor: "green", color: "white" }}
          display="flex"
          justifyContent="center"
        >
          <Typography variant="h4">My Calculator</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
          style={{
            backgroundColor: "white",
          }}
        >
          <Typography>{state}</Typography>
          <Typography>{actions}</Typography>
          <Typography>{another}</Typography>
          <Typography>=</Typography>
          <Typography>{final}</Typography>
        </Box>
        <Box mt={2} p={1}>
          <Grid container>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="success"
                onChange={handleChange}
                onClick={handleplusClick}
              >
                +
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="success"
                onClick={handleMinusClick}
              >
                -
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="success"
                onClick={handleMulClick}
              >
                *
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="success"
                onClick={handleDivClick}
              >
                /
              </Button>
            </Grid>
            <Grid container mt={1} p={3}>
              <Grid p={1} item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleoneClick}
                >
                  {" "}
                  1
                </Button>
              </Grid>
              <Grid p={1} item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handletwoClick}
                >
                  {" "}
                  2
                </Button>
              </Grid>
              <Grid p={1} item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlethreeClick}
                >
                  {" "}
                  3
                </Button>
              </Grid>
              <Grid p={1} item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlefourClick}
                >
                  {" "}
                  4
                </Button>
              </Grid>
              <Grid p={1} item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlefiveClick}
                >
                  {" "}
                  5
                </Button>
              </Grid>
              <Grid p={1} item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlesixClick}
                >
                  {" "}
                  6
                </Button>
              </Grid>
              <Grid p={1} item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlesevenClick}
                >
                  {" "}
                  7
                </Button>
              </Grid>
              <Grid p={1} item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleeightClick}
                >
                  {" "}
                  8
                </Button>
              </Grid>
              <Grid p={1} item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlenineClick}
                >
                  {" "}
                  9
                </Button>
              </Grid>
              <Grid p={1} item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlezerosClick}
                >
                  {" "}
                  0
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="space-between">
            <Box
              ml={2}
              display="flex"
              justifyContent="center"
              width="10%"
              onClick={handlequalClick}
            >
              <Button variant="contained" width={80}>
                =
              </Button>
            </Box>
            <Box
              mr={2}
              display="flex"
              justifyContent="center"
              onClick={handleClearClick}
            >
              <Button variant="contained" width={80}>
                Clear
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
