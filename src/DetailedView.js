import React from "react";
import { renderDate } from "./helperFunctions";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
  },
}));

const DetailedView = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img
              style={{ maxWidth: "200px" }}
              src={data.MaintenanceVendorImageURL}
              alt={data.MaintenanceVendorImageURL}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="body1">Contract Number {data.ContractNumber}</Typography>
            <Typography variant="body1">Total Assets {data.NumberOfAssets}</Typography>
            <Typography variant="body1">First start date {renderDate(data.MinimumStartDate)}</Typography>
            <Typography variant="body1">Last end date {renderDate(data.MinimumStartDate)}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="body1">Assets {data.NumberOfAssets}</Typography>
            <Typography variant="body1">Majos assets {data.NumberOfMajorAssets}</Typography>
            <Typography variant="body1">Number of support types {data.NumberOfSupportTypes}</Typography>
            <Typography variant="body1">Majos assets (Active coverage) {data.AssetsUnderActiveCoverage}</Typography>
            <Typography variant="body1">Majos assets (Expired coverage) {data.AssetsExpiredCoverage}</Typography>
            <Typography variant="body1">Major assets (Signed coverage) {data.AssetsSignedCoverage}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailedView;
