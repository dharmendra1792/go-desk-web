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
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
import Services from "../components/Services";

// export default function Home() {
const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const clickOpenDialog = () => {
    setOpenDialog(true);
  };
  const closeDialog = () => {
    setOpenDialog(false);
  };

  const defaultData = {
    email: "",
    name: "",
    mobile: "",
    address: "",
    brand: "",
    model: "",
    serial_no: "",
    warranty: "",
    description: "",
  };
  const [form, setForm] = useState(defaultData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [errors, setErrors] = useState({});
  const bookAppointment = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const createAppoinment = async () => {
    try {
      const res = await fetch(process.env.API_URL + "/api/appointments", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      console.log("========Booked Appoinment==========");
      setSubmitStatus(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(false);
        setOpenDialog(false);
      }, 6000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.email) {
      err.email = "Email is required";
    }
    if (!form.name) {
      err.name = "Name is required";
    }
    if (!form.mobile) {
      err.mobile = "Mobile is required";
    }
    if (!form.address) {
      err.address = "Address is required";
    }
    if (!form.brand) {
      err.brand = "Brand is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }
    if (!form.model) {
      err.model = "Model is required";
    }
    if (!form.serial_no) {
      err.serial_no = "Serial no is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }
    return err;
  };

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createAppoinment();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

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
                    <a href="tel:#">+1 323-913-4688</a>
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
                      Bangalore, Chennai
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
              onClick={clickOpenDialog}
            >
              Book Appointment
            </Button>
          </Container>
        </section>

        {/* Book Appointment Dialog */}
        <Dialog
          fullWidth
          maxWidth="lg"
          open={openDialog}
          onClose={closeDialog}
          aria-labelledby="form-dialog-title"
          disableBackdropClick={true}
        >
          <form onSubmit={bookAppointment}>
            <DialogTitle id="form-dialog-title" className="text-center">
              Book Appointment
            </DialogTitle>
            <DialogContent>
              <DialogContentText className="text-center">
                {submitStatus ? (
                  <p className="color-3">
                    Appointment booked successfully. We will get back to you
                    soon.
                  </p>
                ) : null}
              </DialogContentText>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="Email"
                    name="email"
                    fullWidth
                    helperText={errors.email === "" ? " " : errors.email}
                    error={errors.email ? { pointing: "below" } : null}
                    onChange={handleField}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    fullWidth
                    helperText={errors.name === "" ? " " : errors.name}
                    error={errors.name ? { pointing: "below" } : null}
                    onChange={handleField}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    margin="dense"
                    id="mobile"
                    label="Mobile"
                    type="text"
                    placeholder="Mobile"
                    name="mobile"
                    fullWidth
                    helperText={errors.mobile === "" ? " " : errors.mobile}
                    error={errors.mobile ? { pointing: "below" } : null}
                    onChange={handleField}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    margin="dense"
                    id="address"
                    label="Address"
                    type="text"
                    placeholder="Address"
                    name="address"
                    fullWidth
                    helperText={errors.address === "" ? " " : errors.address}
                    error={errors.address ? { pointing: "below" } : null}
                    onChange={handleField}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    margin="dense"
                    id="brand"
                    label="Brand"
                    type="text"
                    placeholder="Brand"
                    name="brand"
                    fullWidth
                    helperText={errors.brand === "" ? " " : errors.brand}
                    error={errors.brand ? { pointing: "below" } : null}
                    onChange={handleField}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    margin="dense"
                    id="model"
                    label="Model"
                    type="text"
                    placeholder="Model"
                    name="model"
                    fullWidth
                    helperText={errors.model === "" ? " " : errors.model}
                    error={errors.model ? { pointing: "below" } : null}
                    onChange={handleField}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    margin="dense"
                    id="serial_no"
                    label="Serial No"
                    type="text"
                    placeholder="Serial No"
                    name="serial_no"
                    fullWidth
                    helperText={
                      errors.serial_no === "" ? " " : errors.serial_no
                    }
                    error={errors.serial_no ? { pointing: "below" } : null}
                    onChange={handleField}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    margin="dense"
                    id="warranty"
                    label="Warranty"
                    type="text"
                    placeholder="Warranty"
                    name="warranty"
                    fullWidth
                    onChange={handleField}
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    placeholder="Description"
                    name="description"
                    fullWidth
                    multiline
                    rows={3}
                    helperText={
                      errors.description === "" ? " " : errors.description
                    }
                    error={errors.description ? { pointing: "below" } : null}
                    onChange={handleField}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={closeDialog}
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <CircularProgress style={{ width: "20px", height: "20px" }} />
                ) : null}
                Book
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        {/* end of Book Appointment Dialog */}

        <section className="carousel-section">
          {/* <img src="./images/Carousel-1.JPG" alt="bg-image" /> */}
          <div className="top-left-center">
            <p>IT Services @ your</p>
            <h1>Doorstep</h1>
            <p>Quick Fix | Expert Staff | Affordable</p>
          </div>
          <div className="top-right">
            <img src="./images/Warrenty logo.png" alt="guarantee image" />
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
          Welcome to GoDesk
          {/* Complete your profile Get <span>100</span> Free Coins */}
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
              <Grid item md={3}>
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
              <Grid item md={3}>
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
              <Grid item md={3}>
                <h4>Express Support</h4>
                <div className="container service-3">
                  <div className="without-hover">
                    <div className="centered">
                      <h2>@699</h2>
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
              <Grid item md={3}>
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
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item md={3}>
                <div className="img">
                  <img src="./images/work-1.jpg" alt="work-1" />
                </div>
                <h4>Register</h4>
              </Grid>
              <Grid item md={3}>
                <div className="img">
                  <img src="./images/work-2.jpg" alt="work-2" />
                </div>
                <h4>Book Appointment</h4>
              </Grid>
              <Grid item md={3}>
                <div className="img">
                  <img src="./images/work-3.jpg" alt="work-3" />
                </div>
                <h4>Remote / Doorstep Service</h4>
              </Grid>
              <Grid item md={3}>
                <div className="img">
                  <img src="./images/work-4.jpg" alt="work-4" />
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
                  src="./images/feature-icons/Fast Service.png"
                  alt="image"
                  className="feature-img"
                />
                <h5 className="feature-heading">Fast Service</h5>
                <p className="feature-p">
                  Immediate Assistance, Easy to schedule & Data is secure during
                  remote troubleshooting
                </p>
              </Grid>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/Payment.png"
                  alt="image"
                  className="feature-img"
                />
                <h5 className="feature-heading">Secure Payment</h5>
                <p className="feature-p">
                  Pay securely via Gpay, Paytm, Phone Pay
                </p>
              </Grid>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/Expert Team.png"
                  alt="image"
                  className="feature-img"
                />
                <h5 className="feature-heading">Expert Team</h5>
                <p className="feature-p">
                  All our Technician are background verified and trained to
                  deliver only the best experience
                </p>
              </Grid>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/wallet.png"
                  alt="image"
                  className="feature-img"
                />
                <h5 className="feature-heading">Affordable</h5>
                <p className="feature-p">
                  Quick Fix, Low price Guarantee, No Fix No charges*
                </p>
              </Grid>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/Warrenty.png"
                  alt="image"
                  className="feature-img"
                />
                <h5 className="feature-heading">90 Days Warrenty</h5>
                <p className="feature-p">
                  Repeat issue with in ninety (90) days you get Free tech visit.
                </p>
              </Grid>
              <Grid item md={4}>
                <img
                  src="./images/feature-icons/Award winning.png"
                  alt="image"
                  className="feature-img"
                />
                <h5 className="feature-heading">Award Winning</h5>
                <p className="feature-p">
                  250+ Weekly Repairs, 500+ Parts Replacement.
                </p>
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
                  onClick={clickOpenDialog}
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
            <p className="sub-heading">Diagnostic, Repair & Servicing</p>
            <Grid container justify="center" alignItems="center" spacing={2}>
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
                  src="./images/brand-icons/TOSHIBA-logo.png"
                  width="100"
                  alt="TOSHIBA-logo"
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
            </Grid>
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
                      src="./images/engineers/Suresh.jpg"
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
                      src="./images/engineers/Bharath-1.jpg"
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
                      src="./images/engineers/Pradeep-2.jpg"
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
                      src="./images/engineers/surendran-2.jpg"
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
              <Grid item md={4}>
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
                      <p>Bangalore, Chennai</p>
                    </div>
                  </div>
                </article>
              </Grid>
            </Grid>
          </Container>
        </section>
        {/* end of FAQ */}
      </Layout>
    </div>
  );
};

export default Home;
