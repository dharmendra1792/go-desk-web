import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ComputerIcon from "@material-ui/icons/Computer";

import MockData from "../pages/api/services";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Services() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="secondary"
          variant="fullWidth"
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Desktop" {...a11yProps(0)} />
          <Tab label="Laptop" {...a11yProps(1)} />
          <Tab label="Tablet" {...a11yProps(2)} />
          <Tab label="Printer" {...a11yProps(3)} />
          <Tab label="Network" {...a11yProps(4)} />
          <Tab label="Software" {...a11yProps(5)} />
          <Tab label="Storage and Backup" {...a11yProps(6)} />
        </Tabs>
      </AppBar>

      {MockData.map((service, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            <Grid container spacing={3}>
              {service.items.map((item, index2) => {
                return (
                  <Grid item md={4} key={index2}>
                    <div className="contain-box">
                      <div className="box-unit">
                        <div className="box-unit-left">
                          <ComputerIcon className="box-icon" />
                        </div>
                        <div className="box-unit-body">
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                      <p>{item.discription}</p>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
        );
      })}
      <style jsx>{`
        .contain-box {
          position: relative;
          text-align: left;
          border-color: transparent;
          box-shadow: 0 0 10px 0 rgb(0 0 0 / 17%);
          width: 100%;
          min-height: 180px;
          border-radius: 5px;
          padding: 12px;
        }
        .contain-box .box-unit {
          display: flex;
          flex: 0 1 100%;
        }
        .contain-box .box-unit-left {
          flex: 0 0 auto;
          max-width: 100%;
          margin-right: 8px;
          margin-top: 3px;
          color: #f2695c;
        }
        .contain-box .box-icon {
          vertical-align: middle;
          text-align: center;
          font-size: 120px;
          line-height: 1;
          color: #ffffff;
        }
        .contain-box .box-unit-body {
          flex: 0 1 auto;
        }
        .contain-box .box-unit-body h5 {
          font-size: 20px;
          font-weight: 400;
          color: #127ca6;
        }
        .contain-box p {
          color: #123340;
          font-size: 18px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
