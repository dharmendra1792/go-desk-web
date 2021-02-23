import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import AppointmentDialog from "../components/AppointmentDialog";

const HelpCenter = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Help Center | GoDesk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Breadcrumbs
          title="Help Center"
          bgImage="./images/breadcrumbs-help-center.svg"
        />
        <Container className="help-center-page">
          <Grid container spacing={3}>
            <Grid item md={2}></Grid>
            <Grid item md={8}>
              <h2 className="h2-heading mb-1">Help Center</h2>
              <p className="p-text mb-1">
                We are a group of IT Infrastructure architects, Project Manager,
                Engineers, with in-depth experience working across diverse
                platforms.
              </p>
              <ul>
                <li>
                  To reach our support team please email us at:
                  support@godesk.co.in
                </li>
                <li>
                  To schedule an appointment request{" "}
                  <span>
                    <a onClick={handleClickOpen}>“Click Here”</a>
                  </span>
                </li>
                <li>Our expert team is available to support during weekend.</li>
                <li>Our support is available 16x7 </li>
              </ul>
              <div className="box-info-icon">
                <LocationOnIcon className="icon" />
              </div>
              <div className="box-info-text">
                <p>GoDesk 1678, 27th Main, HSR Layout, Bangalore 560102</p>
              </div>
            </Grid>
            <Grid item md={2}></Grid>
          </Grid>

          {/* appointment section */}
          <section className="appointment-section">
            <Grid container spacing={2} alignItems="center">
              <Grid item md={2}></Grid>
              <Grid item md={5}>
                <h4 className="welcome-text color-2 text-left">
                  Schedule your Appointment Today
                </h4>
              </Grid>
              <Grid item md={3}>
                <Button
                  variant="contained"
                  className="full-width"
                  color="secondary"
                  onClick={handleClickOpen}
                >
                  Book Appointment
                </Button>
              </Grid>
            </Grid>
          </section>
          {/* end of appointment-section */}
        </Container>
        <AppointmentDialog openDialog={open} closeDialog={handleClose} />
      </Layout>
    </div>
  );
};

export default HelpCenter;
