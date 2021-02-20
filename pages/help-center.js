import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

const HelpCenter = () => {
  return (
    <div>
      <Head>
        <title>Help Center | GoDesk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Breadcrumbs
          title="Help Center"
          bgImage="./images/breadcrumbs-help-center.jpg"
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
                    <Link href="/">
                      <a>“Go Home Page”</a>
                    </Link>
                  </span>{" "}
                  and click on "Book Appointment" button.
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
        </Container>
      </Layout>
    </div>
  );
};

export default HelpCenter;
