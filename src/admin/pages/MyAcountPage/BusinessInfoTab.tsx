// import { useState } from "react";

import { Box, Divider, Grid } from "@mui/material";

import { BusinessInfo } from "./BusinessInfo";
import { BusinessContact } from "./BusinessContact";

export const BusinessInfoTab = () => {

  return (
    <Box py={5} className="animate__animated animate__fadeIn">
      <Grid container justifyContent={"center"}>
        <Grid item xs={8}>

          <BusinessInfo />

          <Divider sx={{ marginBottom: 5 }} />

          <BusinessContact />

        </Grid>
      </Grid>
    </Box>
  );
};
