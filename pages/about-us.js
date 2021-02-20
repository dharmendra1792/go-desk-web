import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

const AboutUs = () => {
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
            <Grid item md={3}></Grid>
            <Grid item md={6}>
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
            <Grid item md={3}></Grid>
          </Grid>
        </Container>
      </Layout>
    </div>
  );
};

export default AboutUs;
