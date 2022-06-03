import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const IncDecCounter = () => {
  const [state, setState] = useState(0);

  const handleIncClick = () => {
    setState(state + 1);
  };

  const handleDecClick = () => {
    setState(state - 1);
  };

  return (
    <>
      <div>IncDecCounter</div>
      <Box m={3} display="flex" alignItems="center">
        <Button variant="contained" color="success" onClick={handleIncClick}>
          {" "}
          + inc
        </Button>
        <Typography p={3} variant="subtitle1" component="div">
          {state}
        </Typography>
        <Button variant="contained" color="error" onClick={handleDecClick}>
          {" "}
          - dec{" "}
        </Button>
      </Box>
    </>
  );
};

export default IncDecCounter;
