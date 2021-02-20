import Head from "next/head";
import Container from "@material-ui/core/Container";
import Layout from "../components/Layout";

const TermsAndConditions = () => {
  return (
    <div>
      <Head>
        <title>Terms And Conditions | GoDesk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container className="terms-page">
          <h2 className="h2-heading mb-1">Terms of Use</h2>
          <p className="p-para mb-1">
            Welcome to GoDesk You my use the website, services, content,
            technologies and applications of godesk.co.in (the “Website”) BY
            USING THE WEBSITE AND/OR BY CREATING AN ACCOUNT WITH GoDesk, YOU
            AGREE TO THE TERMS AND CONDITIONS BELOW, AND ANY SUBSEQUENT
            MODIFICATIONS THERETO. IF YOU DO NOT AGREE TO THE FOREGOING, DO NOT
            USE THIS WEBSITE OR OUR SERVICES IN ANY WAY.
          </p>
          <h2 className="h2-heading mb-1">Site Terms</h2>
          <p className="p-para mb-1">
            We use the brand name “GoDesk” to associate our products and
            services and to connect us with the brand of our parent company,
            Bellwether Business Solutions Pvt Ltd. <br />
            The Website is a service made available by Bellwether Business
            Solutions Pvt Ltd (hereinafter referred to as “Bellwether”) (“we”,
            “our” or “us”). The Site Terms govern your use of the Website. We
            may modify the Site Terms at any time. Your continued use of the
            Website constitutes your acceptance to all terms and conditions of
            the Website or our Services at the time of use. Every time you visit
            the Website, you reaffirm your acceptance of the Site Terms. Upon
            each visit, you are responsible for reviewing the Site Terms and any
            additional terms and conditions.
          </p>
          <h2 className="h2-heading mb-1">Use of the Website</h2>
          <p className="p-para mb-1">
            You may visit the Website without creating an account, you further
            agree to provide accurate, complete information when creating your
            account and you will notify us of any updates to the information
            provided by you prior to completing any transactions at
            support@godesk.co.in.
          </p>
          <h2 className="h2-heading mb-1">Liability</h2>
          <p className="p-para mb-1">
            GoDesk makes no representations regarding the availability and
            performance of this Website. You understand and agree that any use
            of or reliance upon this Website or Materials is at your sole risk.
            We are not responsible for any resulting loss or damages to you.
          </p>
          <h2 className="h2-heading mb-1">90 days warranty*</h2>
          <p className="p-para mb-1">
            GoDesk warrants for a period of ninety (90) days from the date of
            service that service will be performed in a competent manner, any
            repeat issue within 90 days you get a Free visit from our tech to
            resolve.
            <br /> We offer a 90 days warranty on all our repairs. If the
            original repair fails because of the workmanship in repairing the
            device, we will fix it for FREE. No questions asked. Defective part
            replaced is covered under the original equipment manufacturer
            warranty. GoDesk will not be providing warranty for parts under this
            90-days warranty. You need to reach out to the original equipment
            manufacturer for specific part warranty
          </p>
          <h2 className="h2-heading mb-1">No Fix No Charges</h2>
          <p className="p-para mb-1">
            We do not fix the issue then we go not charge for the visit, this
            means if we are unable to fix to do the workmanship of the
            technician. However, if we are unable to fix owing to any physical
            damage or manufacturing defect we would still be charging for the
            visit.
          </p>
          <h2 className="h2-heading mb-1">Disclaimer</h2>
          <p className="p-para mb-1">
            You understand that GoDesk makes every reasonable effort to ensure
            the information and Content presented on this Website is accurate
            and updated and agree GoDesk does not warrant, represent, or
            guarantee, express or implied, statutory or otherwise, the accuracy
            of the information or Content on this Website, makes no guarantee as
            to such information and is not responsible for the information,
            including its accuracy, currency, content, quality, compliance or
            legality, or any resulting loss or damage to you.
          </p>
        </Container>
      </Layout>
    </div>
  );
};

export default TermsAndConditions;
