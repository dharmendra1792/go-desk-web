import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MailIcon from "@material-ui/icons/Mail";
import MoodIcon from "@material-ui/icons/Mood";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Layout from "../components/Layout";
import Services from "../components/Services";
import AppointmentDialog from "../components/AppointmentDialog";

// export default function Home() {
const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="home-page">
      <Head>
        <title>Home | GoDesk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="navbar-bg">
        <Container>
          <div className="navbar-static">
            <ul className="corporate-contacts">
              <li>
                <div className="unit">
                  <div className="unit-left">
                    <PhoneIcon className="icon" />
                  </div>
                  <div className="unit-body">
                    <a href="tel:#">+91 9483614719</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="unit">
                  <div className="unit-left">
                    <LocationOnIcon className="icon" />
                  </div>
                  <div className="unit-body">
                    <p>
                      Bangalore
                      {/* 09:00<span>am</span> — 05:00<span>pm</span> */}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="unit">
                  <div className="unit-left">
                    <MailIcon className="icon" />
                  </div>
                  <div className="unit-body">
                    <p>support@godesk.co.in</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <Layout>
        <section className="navbar-2">
          <Container>
            <span className="logo">
              <Link href="/">GoDesk</Link>
            </span>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickOpen}
            >
              Book Appointment
            </Button>
          </Container>
        </section>

        <section className="carousel-section">
          <div className="top-left-center">
            <p>IT Services @ your</p>
            <h1>Doorstep</h1>
            <p>Quick Fix | Expert Staff | Affordable</p>
          </div>
          <div className="top-right">
            <img src="./images/warranty-logo.png" alt="90-days-warranty" />
          </div>
        </section>
        <section className="carousel-bottom">
          <Container>
            <Grid container spacing={2} justify="center">
              <Grid item md={4} className="full-width">
                <article className="box">
                  <div className="box-body">
                    <div className="box-name">Remote(Online) Support</div>
                    <div className="box-decor"></div>
                    <p className="box-text">
                      With millions working from home resolving your IT issues
                      can be painful
                    </p>
                  </div>
                </article>
              </Grid>
              <Grid item md={4} className="full-width">
                <article className="box">
                  <div className="box-body">
                    <div className="box-name">Doorstep (Field) Support</div>
                    <div className="box-decor"></div>
                    <p className="box-text">
                      Avail our Pre-Launch offer price at 399
                    </p>
                  </div>
                </article>
              </Grid>
              <Grid item md={4} className="full-width">
                <article className="box">
                  <div className="box-body">
                    <div className="box-name">Express Support</div>
                    <div className="box-decor"></div>
                    <p className="box-text">
                      Launching GoDesk your IT Support Expert
                    </p>
                  </div>
                </article>
              </Grid>
            </Grid>
          </Container>
        </section>
        <h4 className="welcome-text color-2">
          Welcome to GoDesk{" "}
          <span>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickOpen}
            >
              Book Appointment
            </Button>
          </span>
        </h4>
        {/* services-section */}
        <section className="services-section">
          <Container>
            <h2 className="heading color-1 mb-2">Checkout Our Services</h2>
            <Services />
          </Container>
        </section>
        {/* end of services-section */}

        {/* pricing-section */}
        <section className="pricing-section">
          <Container>
            <h2 className="heading mb-2">Support at Your Convenience</h2>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item md={3} className="full-width">
                <h4>Remote Support</h4>
                <div className="container service-1">
                  <div className="without-hover">
                    <div className="centered">
                      <h2>@99</h2>
                      <Button variant="contained" color="secondary">
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="with-hover">
                    <div className="centered">
                      <p>
                        Working from home is new normal, we are there to ensure
                        business continuity.
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} className="full-width">
                <h4>Doorstep (Field) Support</h4>
                <div className="container service-2">
                  <div className="without-hover">
                    <div className="centered">
                      <h2>@399</h2>
                      <Button variant="contained" color="secondary">
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="with-hover">
                    <div className="centered">
                      <p>
                        We believe your support experience should be personal
                        without disruptions.
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} className="full-width">
                <h4>Express Support</h4>
                <div className="container service-3">
                  <div className="without-hover">
                    <div className="centered">
                      <h2>@599</h2>
                      <Button variant="contained" color="secondary">
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="with-hover">
                    <div className="centered">
                      <p>
                        Express On-site solutions enhance the way we serve with
                        expert Technician.
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} className="full-width">
                <h4>Buying Guide</h4>
                <div className="container service-4">
                  <div className="without-hover">
                    <div className="centered">
                      <h2>Free</h2>
                      <Button variant="contained" color="secondary">
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="with-hover">
                    <div className="centered">
                      <p>
                        Choosing the right device is easier. Talk to our experts
                        at GoDesk to get the right advice
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        {/* end of pricing-section */}

        {/* work-section */}
        <section className="work-section">
          <Container>
            <h2 className="heading">How We Work</h2>
            <p className="sub-heading mb-2">
              Powering a personalized, intelligent, secure and trustable IT
              support experience
            </p>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justify="center"
              className="bg-line"
            >
              <Grid item md={3}>
                <div className="img">
                  <img src="./images/work/register.jpg" alt="Register" />
                </div>
                <h4>Register</h4>
              </Grid>
              <Grid item md={3}>
                <div className="img">
                  <img
                    src="./images/work/book-appointment.jpg"
                    alt="Book Appointment"
                  />
                </div>
                <h4>Book Appointment</h4>
              </Grid>
              <Grid item md={3}>
                <div className="img">
                  <img
                    src="./images/work/remote-or-doorstep-service.jpg"
                    alt="Remote/Doorstep Service"
                  />
                </div>
                <h4>Remote / Doorstep Service</h4>
              </Grid>
              <Grid item md={3}>
                <div className="img">
                  <img src="./images/work/fix-it.jpg" alt="Fix It" />
                </div>
                <h4>
                  Fix It{" "}
                  <span>
                    <MoodIcon className="icon" />
                  </span>
                </h4>
              </Grid>
            </Grid>
          </Container>
        </section>
        {/* end of work-section */}

        {/* feature-section */}
        <section className="feature-section">
          <Container>
            <h2 className="heading mb-1">Why US</h2>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/fast-service.png"
                  alt="image"
                  className="feature-img"
                />
                <div className="feature-text">
                  <h5 className="feature-heading">Fast Service</h5>
                  <p className="feature-p">
                    Immediate Assistance, Easy to schedule & Data is secure
                    during remote troubleshooting
                  </p>
                </div>
              </Grid>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/secure-payment.png"
                  alt="image"
                  className="feature-img"
                />
                <div className="feature-text">
                  <h5 className="feature-heading">Secure Payment</h5>
                  <p className="feature-p">
                    Pay securely via Gpay, Paytm, Phone Pay
                  </p>
                </div>
              </Grid>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/expert-team.png"
                  alt="image"
                  className="feature-img"
                />
                <div className="feature-text">
                  <h5 className="feature-heading">Expert Team</h5>
                  <p className="feature-p">
                    All our Technician are background verified and trained to
                    deliver only the best experience
                  </p>
                </div>
              </Grid>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/affordable.png"
                  alt="image"
                  className="feature-img"
                />
                <div className="feature-text">
                  <h5 className="feature-heading">Affordable</h5>
                  <p className="feature-p">
                    Quick Fix, Low price Guarantee, No Fix No charges*
                  </p>
                </div>
              </Grid>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/warranty.png"
                  alt="image"
                  className="feature-img"
                />
                <div className="feature-text">
                  <h5 className="feature-heading">90 Days Warranty</h5>
                  <p className="feature-p">
                    Repeat issue with in ninety (90) days you get Free tech
                    visit.
                  </p>
                </div>
              </Grid>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/award-winning.png"
                  alt="image"
                  className="feature-img"
                />
                <div className="feature-text">
                  <h5 className="feature-heading">Award Winning</h5>
                  <p className="feature-p">
                    250+ Weekly Repairs, 500+ Parts Replacement.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        {/* end of feature-section */}

        {/* appointment section */}
        <section className="appointment-section">
          <Container>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item md={1}></Grid>
              <Grid item md={6}>
                <h4 className="welcome-text color-2">
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
          </Container>
        </section>
        {/* end of appointment-section */}

        {/* brand-section */}
        <section className="brand-section">
          <Container>
            <h2 className="heading">Multi-Brand Services</h2>
            <p className="sub-heading mb-2">Diagnostic, Repair & Servicing</p>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              containerClass="carousel-container"
              itemClass="carousel-item"
            >
              <div>
                <img src="./images/brand-icons/dell-logo.png" alt="dell-logo" />
              </div>
              <div>
                <img
                  src="./images/brand-icons/apple-logo.png"
                  alt="apple-logo"
                />
              </div>
              <div>
                <img
                  src="./images/brand-icons/lenovo-logo.png"
                  alt="lenovo-logo"
                />
              </div>
              <div>
                <img src="./images/brand-icons/acer-logo.png" alt="acer-logo" />
              </div>
              <div>
                <img
                  src="./images/brand-icons/toshiba-logo.png"
                  alt="toshiba-logo"
                />
              </div>
              <div>
                <img
                  src="./images/brand-icons/samsung-logo.png"
                  alt="samsung-logo"
                />
              </div>
              <div>
                <img src="./images/brand-icons/hp-logo.png" alt="hp-logo" />
              </div>
              <div>
                <img src="./images/brand-icons/asus-logo.png" alt="asus-logo" />
              </div>
              <div>
                <img
                  src="./images/brand-icons/canon-logo.png"
                  alt="canon-logo"
                />
              </div>
              <div>
                <img
                  src="./images/brand-icons/cisco-logo.png"
                  alt="cisco-logo"
                />
              </div>
            </Carousel>
            {/* <Grid container justify="center" alignItems="center">
              <Grid item md={2} className="text-center">
                <img
                  src="./images/brand-icons/dell-logo.png"
                  width="100"
                  alt="dell-logo"
                />
              </Grid>
              <Grid item md={2} className="text-center">
                <img
                  src="./images/brand-icons/apple-logo.png"
                  width="100"
                  alt="apple-logo"
                />
              </Grid>
              <Grid item md={2} className="text-center">
                <img
                  src="./images/brand-icons/lenovo-logo.png"
                  width="100"
                  alt="lenovo-logo"
                />
              </Grid>
              <Grid item md={2} className="text-center">
                <img
                  src="./images/brand-icons/acer-logo.png"
                  width="100"
                  alt="acer-logo"
                />
              </Grid>
              <Grid item md={2} className="text-center">
                <img
                  src="./images/brand-icons/toshiba-logo.png"
                  width="100"
                  alt="toshiba-logo"
                />
              </Grid>
              <Grid item md={2} className="text-center">
                <img
                  src="./images/brand-icons/samsung-logo.png"
                  width="100"
                  alt="samsung-logo"
                />
              </Grid>
              <Grid item md={2} className="text-center">
                <img
                  src="./images/brand-icons/hp-logo.png"
                  width="100"
                  alt="hp-logo"
                />
              </Grid>
              <Grid item md={2} className="text-center">
                <img
                  src="./images/brand-icons/asus-logo.png"
                  width="100"
                  alt="asus-logo"
                />
              </Grid>
              <Grid item md={2} className="text-center">
                <img
                  src="./images/brand-icons/canon-logo.png"
                  width="100"
                  alt="canon-logo"
                />
              </Grid>
              <Grid item md={2} className="text-center">
                <img
                  src="./images/brand-icons/cisco-logo.png"
                  width="100"
                  alt="cisco-logo"
                />
              </Grid>
            </Grid> */}
          </Container>
        </section>
        {/* end of brand-section */}

        {/* our team section */}
        <section className="team-section">
          <Container>
            <h2 className="heading mb-1">Our Technicians</h2>
            <Grid container spacing={2} justify="center">
              <Grid item md={3}>
                <article className="team">
                  <p className="team-figure">
                    <img
                      src="./images/engineers/suresh-technician.jpg"
                      alt=""
                      width="270"
                      height="248"
                    />
                  </p>
                  <div className="team-caption text-center">
                    <h5 className="team-name">
                      <p>Suresh</p>
                    </h5>
                    <p className="team-status">Senior Technician</p>
                    <div className="team-arrow"></div>
                  </div>
                </article>
              </Grid>
              <Grid item md={3}>
                <article className="team">
                  <p className="team-figure">
                    <img
                      src="./images/engineers/bharath-technician.jpg"
                      alt=""
                      width="270"
                      height="248"
                    />
                  </p>
                  <div className="team-caption text-center">
                    <h5 className="team-name">
                      <p>Bharath</p>
                    </h5>
                    <p className="team-status">Senior Technician</p>
                    <div className="team-arrow"></div>
                  </div>
                </article>
              </Grid>
              <Grid item md={3}>
                <article className="team">
                  <p className="team-figure">
                    <img
                      src="./images/engineers/pradeep-technician.jpg"
                      alt=""
                      width="270"
                      height="248"
                    />
                  </p>
                  <div className="team-caption text-center">
                    <h5 className="team-name">
                      <p>Pradeep</p>
                    </h5>
                    <p className="team-status">Senior Technician</p>
                    <div className="team-arrow"></div>
                  </div>
                </article>
              </Grid>
              <Grid item md={3}>
                <article className="team">
                  <p className="team-figure">
                    <img
                      src="./images/engineers/surendran-technician.jpg"
                      alt=""
                      width="270"
                      height="248"
                    />
                  </p>
                  <div className="team-caption text-center">
                    <h5 className="team-name">
                      <p>Surendran</p>
                    </h5>
                    <p className="team-status">Senior Technician</p>
                    <div className="team-arrow"></div>
                  </div>
                </article>
              </Grid>
            </Grid>
          </Container>
        </section>
        {/* end of our team section */}

        {/* reviews section */}
        <section className="review-section">
          <Container>
            <h2 className="heading color-white">Customer Reviews</h2>
            <p className="sub-heading color-white mb-1">What people say</p>
            <Grid container spacing={2} justify="center">
              <Grid item md={4} className="full-width">
                <article className="box">
                  <div className="box-body">
                    <div className="box-name">Mahesh R</div>
                    <div className="box-decor"></div>
                    <p className="box-text">
                      "An extraordinary computer service is hard to find, but
                      rest assured, GoDesk, is extraordinary. They offered me
                      immediate technical assistance when I desperately needed
                      it. I will forever be grateful, and will not only use them
                      again, but recommend them highly. The best of the best in
                      town."
                    </p>
                  </div>
                </article>
              </Grid>
              <Grid item md={4} className="full-width">
                <article className="box">
                  <div className="box-body">
                    <div className="box-name">Dharmendra Y</div>
                    <div className="box-decor"></div>
                    <p className="box-text">
                      "These guys rock. Just walked in because one of my cables
                      were damaged and hooked me up in less than a minute. I
                      will definitely go back and will also recommend that
                      others do as well."
                    </p>
                  </div>
                </article>
              </Grid>
              <Grid item md={4} className="full-width">
                <article className="box">
                  <div className="box-body">
                    <div className="box-name">Arun K</div>
                    <div className="box-decor"></div>
                    <p className="box-text">
                      "The GoDesk has saved a number of my electronics from
                      iPhones to a water damaged computer. They are very
                      professional and helpful. They kept me up-to-date
                      throughout the entire process of my computer being fixed
                      and I am so grateful for their hard work."
                    </p>
                  </div>
                </article>
              </Grid>
            </Grid>
          </Container>
        </section>
        {/* end of reviews section */}

        {/* FAQ section */}
        <section className="faq-section">
          <Container>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item md={8}>
                <h2 className="heading mb-2">Frequently Asked Questions</h2>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ? (
                        <RemoveCircleOutlineIcon />
                      ) : (
                        <AddCircleOutlineIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography>
                      How do I know which computer is right for me?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The right computer for you is going to depend on what
                      you’ll be using it for. If you’re not sure what you need,
                      we recommend you talk to us! We can walk you through the
                      options and even accompany you to the purchase.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ? (
                        <RemoveCircleOutlineIcon />
                      ) : (
                        <AddCircleOutlineIcon />
                      )
                    }
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography>
                      Can you fix my Internet connection over the online?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We can try! We’ll run you through some easy fixes over the
                      Remote support. However, there are plenty of reasons an
                      Internet connection may be down and it may require an
                      onsite visit.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ? (
                        <RemoveCircleOutlineIcon />
                      ) : (
                        <AddCircleOutlineIcon />
                      )
                    }
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography>
                      I feel like my computer is slower. Is that just what
                      happens when a computer gets older?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      There’s no reason to put up with a computer that is
                      gradually slowing down. It’s worth checking a slow
                      computer for malware and hardware failure. It may be a
                      simple fix. If you’re not sure, check with us.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ? (
                        <RemoveCircleOutlineIcon />
                      ) : (
                        <AddCircleOutlineIcon />
                      )
                    }
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography>
                      How to troubleshoot a printer issue?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Check that your default printer is the one you’re trying
                      to print to!, Try Clearing your queue. Mostly printer will
                      tells you what the issue is! People tend to not read so
                      take a close look at the printer's display. If all fails
                      do not worry our expert online technician can assist.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ? (
                        <RemoveCircleOutlineIcon />
                      ) : (
                        <AddCircleOutlineIcon />
                      )
                    }
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography>Having an apple hardware issue?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Do you have any of these common Mac hardware repair
                      issues? We can even take an older Mac and turn it into
                      something that acts like it’s fresh from the Apple Store.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item md={4} className="mt-2">
                <article className="box-info">
                  <div className="box-info-body">
                    <div className="box-info-icon">
                      <WatchLaterIcon className="icon" />
                    </div>
                    <div className="box-info-text">
                      <p>Monday - Saturday (10 AM - 8 PM)</p>
                    </div>
                    <div className="box-info-icon">
                      <LocationOnIcon className="icon" />
                    </div>
                    <div className="box-info-text">
                      <p>
                        GoDesk 1678, 27th Main, HSR Layout, Bangalore 560102
                      </p>
                    </div>
                  </div>
                </article>
              </Grid>
            </Grid>
          </Container>
        </section>
        <AppointmentDialog openDialog={open} closeDialog={handleClose} />
        {/* end of FAQ */}
      </Layout>
    </div>
  );
};

export default Home;
