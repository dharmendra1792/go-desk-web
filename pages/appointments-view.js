import React from "react";
import Head from "next/head";
import MUIDataTable from "mui-datatables";
import Layout from "../components/Layout";

const AppointmentsView = ({ appointments }) => {
  const columns = [
    {
      name: "email",
      label: "Email ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "mobile",
      label: "Mobile",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "address",
      label: "Address",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "brand",
      label: "Brand",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "model",
      label: "Model",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "serial_no",
      label: "Serial No",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "warranty",
      label: "Warranty",
      options: {
        filter: true,
        sort: false,
        display: false,
      },
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    filterType: "dropdown",
    selectableRows: "none",
  };
  return (
    <div>
      <Head>
        <title>Appointments | GoDesk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MUIDataTable
          title={"Appointments"}
          data={appointments}
          columns={columns}
          options={options}
        />
      </Layout>
    </div>
  );
};

AppointmentsView.getInitialProps = async () => {
  const res = await fetch(process.env.API_URL + "/api/appointments");
  const { data } = await res.json();

  return { appointments: data };
};

export default AppointmentsView;
