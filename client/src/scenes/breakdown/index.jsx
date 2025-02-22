import React from "react";
import { Box, usetheme } from "@mui/material";
import Header from "components/Header";
import BreakdowChart from "components/BreakdownChart";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdowChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
