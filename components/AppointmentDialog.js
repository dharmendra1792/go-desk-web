import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import fetch from "isomorphic-unfetch";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid");
const validationSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .required("Mobile is required")
    .matches(phoneRegExp, "mobile number is not valid"),
  address: Yup.string().required("Address is required"),
  brand: Yup.string().required("Brand is required"),
  model: Yup.string().required("Model is required"),
  serial_no: Yup.string().required("Serial Number is required"),
  warranty: Yup.string(),
  description: Yup.string().required("Description is required"),
});

export default function AppointmentDialog({ openDialog, closeDialog }) {
  const formValues = {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [disableField, setDisableField] = useState(false);

  const bookAppointment = (formData) => {
    console.log("formData", formData);
    setIsSubmitting(true);
    createAppoinment(formData);
  };

  const createAppoinment = async (formData) => {
    setDisableField(true);
    try {
      const res = await fetch(process.env.API_URL + "/api/appointments", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("========Appoinment Booked Successfully!!==========");
      setSubmitStatus(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(false);
        setDisableField(false);
        closeDialog();
      }, 10000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Book Appointment Dialog */}
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openDialog}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}
      >
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          onSubmit={bookAppointment}
        >
          {({
            values: {
              email,
              name,
              mobile,
              address,
              brand,
              model,
              serial_no,
              warranty,
              description,
            },
            errors,
            touched,
            isValid,
            dirty,
            handleChange,
            setFieldTouched,
          }) => {
            const change = (name, e) => {
              e.persist();
              handleChange(e);
              setFieldTouched(name, true, false);
            };
            return (
              <Form>
                <DialogTitle id="form-dialog-title" className="text-center">
                  Book Appointment
                </DialogTitle>
                <DialogContent>
                  {submitStatus ? (
                    <DialogContentText className="text-center color-3">
                      Thanks for raising your support request, We are there to
                      assist you!. Our Technician will reach out to you in few
                      hours.
                    </DialogContentText>
                  ) : null}
                  <Grid container spacing={2}>
                    <Grid item md={6} className="full-width">
                      <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="Email"
                        name="email"
                        fullWidth
                        value={email}
                        onChange={change.bind(null, "email")}
                        helperText={touched.email ? errors.email : ""}
                        error={touched.email && Boolean(errors.email)}
                        disabled={disableField}
                      />
                    </Grid>
                    <Grid item md={6} className="full-width">
                      <TextField
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        placeholder="Name"
                        name="name"
                        fullWidth
                        value={name}
                        onChange={change.bind(null, "name")}
                        helperText={touched.name ? errors.name : ""}
                        error={touched.name && Boolean(errors.name)}
                        disabled={disableField}
                      />
                    </Grid>
                    <Grid item md={6} className="full-width">
                      <TextField
                        margin="dense"
                        id="mobile"
                        label="Mobile"
                        type="text"
                        placeholder="Mobile"
                        name="mobile"
                        fullWidth
                        value={mobile}
                        onChange={change.bind(null, "mobile")}
                        helperText={touched.mobile ? errors.mobile : ""}
                        error={touched.mobile && Boolean(errors.mobile)}
                        disabled={disableField}
                      />
                    </Grid>
                    <Grid item md={6} className="full-width">
                      <TextField
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        placeholder="Address"
                        name="address"
                        fullWidth
                        value={address}
                        onChange={change.bind(null, "address")}
                        helperText={touched.address ? errors.address : ""}
                        error={touched.address && Boolean(errors.address)}
                        disabled={disableField}
                      />
                    </Grid>
                    <Grid item md={6} className="full-width">
                      <TextField
                        margin="dense"
                        id="brand"
                        label="Brand"
                        type="text"
                        placeholder="Brand"
                        name="brand"
                        fullWidth
                        value={brand}
                        onChange={change.bind(null, "brand")}
                        helperText={touched.brand ? errors.brand : ""}
                        error={touched.brand && Boolean(errors.brand)}
                        disabled={disableField}
                      />
                    </Grid>
                    <Grid item md={6} className="full-width">
                      <TextField
                        margin="dense"
                        id="model"
                        label="Model"
                        type="text"
                        placeholder="Model"
                        name="model"
                        fullWidth
                        value={model}
                        onChange={change.bind(null, "model")}
                        helperText={touched.model ? errors.model : ""}
                        error={touched.model && Boolean(errors.model)}
                        disabled={disableField}
                      />
                    </Grid>
                    <Grid item md={6} className="full-width">
                      <TextField
                        margin="dense"
                        id="serial_no"
                        label="Serial No"
                        type="text"
                        placeholder="Serial No"
                        name="serial_no"
                        fullWidth
                        value={serial_no}
                        onChange={change.bind(null, "serial_no")}
                        helperText={touched.serial_no ? errors.serial_no : ""}
                        error={touched.serial_no && Boolean(errors.serial_no)}
                        disabled={disableField}
                      />
                    </Grid>
                    <Grid item md={6} className="full-width">
                      <TextField
                        margin="dense"
                        id="warranty"
                        label="Warranty"
                        type="text"
                        placeholder="Warranty"
                        name="warranty"
                        fullWidth
                        value={warranty}
                        onChange={change.bind(null, "warranty")}
                        helperText={touched.warranty ? errors.warranty : ""}
                        error={touched.warranty && Boolean(errors.warranty)}
                        disabled={disableField}
                      />
                    </Grid>
                    <Grid item md={12} className="full-width">
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
                        value={description}
                        onChange={change.bind(null, "description")}
                        helperText={
                          touched.description ? errors.description : ""
                        }
                        error={
                          touched.description && Boolean(errors.description)
                        }
                        disabled={disableField}
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
                    disabled={!isValid || !dirty || disableField}
                  >
                    {isSubmitting ? (
                      <CircularProgress
                        style={{ width: "20px", height: "20px" }}
                      />
                    ) : null}
                    Book
                  </Button>
                </DialogActions>
              </Form>
            );
          }}
        </Formik>
      </Dialog>
      {/* end of Book Appointment Dialog */}
    </>
  );
}
