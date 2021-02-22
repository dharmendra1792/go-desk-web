import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => (
  <footer className="footer-area">
    <Container>
      <Grid container spacing={2} justify="center">
        <Grid item md={3} className="full-width">
          <h2>
            <Link href="/">GoDesk</Link>
          </h2>
          <p>Contact No : +91 9483614719</p>
        </Grid>
        <Grid item md={3} className="full-width">
          {/* <div className="link">
            <Link href="/">
              <a>Register as Partner</a>
            </Link>
          </div> */}
          <div className="link">
            <Link href="/about-us">
              <a>About GoDesk</a>
            </Link>
          </div>
          <div className="link">
            <Link href="/help-center">
              <a>Help Center</a>
            </Link>
          </div>
        </Grid>
        <Grid item md={3} className="full-width">
          {/* <div className="link">
            <Link href="/">
              <a>Rate GoDesk</a>
            </Link>
          </div> */}
          <div className="link">
            <Link href="/terms-and-conditions">
              <a>Terms & Conditions</a>
            </Link>
          </div>
          <div className="link">
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </div>
        </Grid>
        <Grid item md={3} className="full-width">
          <div style={{ textAlign: "right" }}>
            <ul className="social-links">
              <li>
                <Link href="https://www.facebook.com/thegodesk" passHref>
                  <a target="_blank">
                    <FacebookIcon className="social-icon" />
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/the-go-desk"
                  passHref
                >
                  <a target="_blank">
                    <LinkedInIcon className="social-icon" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/thegodesk" passHref>
                  <a target="_blank">
                    <TwitterIcon className="social-icon" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/thegodesk/" passHref>
                  <a target="_blank">
                    <InstagramIcon className="social-icon" />
                  </a>
                </Link>
              </li>
            </ul>
            <p>support@godesk.co.in</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  </footer>
);
export default Footer;
