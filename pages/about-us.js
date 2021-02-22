import React, { useState } from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import AppointmentDialog from "../components/AppointmentDialog";

const AboutUs = () => {
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
        <title>About Us | GoDesk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Breadcrumbs
          title="About Us"
          bgImage="./images/breadcrumbs-about-us.jpg"
        />
        <Container className="about-us-page">
          <Grid container spacing={3}>
            <Grid item md={2}></Grid>
            <Grid item md={8}>
              <h2 className="h2-heading mb-1">About Us</h2>
              <p className="p-text mb-1">
                We are a group of IT Infrastructure architects, Project Manager,
                Engineers, with in-depth experience working across diverse
                platforms.
              </p>
              <p className="p-text mb-1">
                Team GoDesk is committed to care & maintain your mission
                critical devices that keeps you moving. We believe in providing
                a personalized, Intelligent, Secure and trustable IT support
                Experience All our Technician are background verified and
                trained to deliver only the best experience.
              </p>
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

export default AboutUs;
