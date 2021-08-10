import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "2.5%",
    marginBottom: "2.5%",
    color: "#48B9E3",
  },
}));

const MainHeading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="span" variant="h4">
        Data3# Test Application
      </Typography>
    </div>
  );
};

export default MainHeading;
