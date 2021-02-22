import Container from "@material-ui/core/Container";
import Link from "next/link";

export default function Breadcrumbs({ title, bgImage }) {
  return (
    <div className="breadcrumbs">
      <section className="breadcrumbs-custom-inset">
        <div className="breadcrumbs-custom context-dark bg-overlay-41">
          <Container>
            <h2>{title}</h2>
            <ul className="breadcrumbs-ul">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              {/* <li className="active">{title}</li> */}
            </ul>
          </Container>
          <div
            className="box-position"
            style={{
              backgroundImage: "url(" + bgImage + ")",
            }}
          ></div>
        </div>
      </section>
      <style jsx>{`
        section {
          display: block;
        }
        .breadcrumbs-custom {
          position: relative;
          overflow: hidden;
          padding: 40px 0;
          text-align: center;
          background-color: #cccccc;
          z-index: 1;
        }
        .context-dark {
          color: #ffffff;
        }
        .bg-overlay-41::before {
          background-color: rgba(43, 49, 59, 0.41);
        }
        @media (min-width: 1200px) {
          .breadcrumbs-custom {
            padding: 50px 0 250px 0;
          }
          .context-dark h2 {
            font-size: 70px;
            line-height: 1;
          }
        }
        @media (min-width: 992px) {
          .context-dark h2 {
            font-size: 60px;
          }
        }
        @media (min-width: 768px) {
          .context-dark h2 {
            font-size: 50px;
          }
        }
        .context-dark h2 {
          color: #ffffff;
        }
        .breadcrumbs-ul {
          padding: 0;
          margin-top: 14px;
          margin-left: -15px;
          margin-right: -15px;
          font-size: 18px;
          line-height: 1.33;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: sans-serif;
        }
        .breadcrumbs-ul li {
          position: relative;
          display: inline-block;
          vertical-align: middle;
        }
        .breadcrumbs-ul li.active {
          color: rgba(255, 255, 255, 0.53);
        }
        .breadcrumbs-ul > * {
          padding-left: 15px;
          padding-right: 15px;
        }
        .breadcrumbs-ul a,
        .breadcrumbs-ul a:active,
        .breadcrumbs-ul a:focus {
          color: #f2695c;
        }
        .breadcrumbs-ul a {
          display: inline;
          vertical-align: middle;
        }
        a,
        a:focus,
        a:active {
          color: #ffdb73;
          text-decoration: none;
        }
        .breadcrumbs-ul a:hover {
          color: #ffffff;
        }
        .breadcrumbs-ul li:not(:last-child)::after {
          content: "/";
          display: inline-block;
          position: absolute;
          top: 50%;
          right: -8px;
          color: rgba(255, 255, 255, 0.53);
          transform: translate3d(0, -50%, 0);
        }
        .box-position {
          position: absolute;
          left: 0;
          top: 0;
          width: calc(100% + 150px);
          height: calc(100% + 150px);
          will-change: transform;
          animation: bgPos 100s linear infinite;
          transform: translate3d(-75px, -75px, 0) rotate(0.001deg);
          background-position: 50% 50%;
          background-size: cover;
          z-index: -1;
        }

        @keyframes bgPos {
          25% {
            transform: translate3d(-150px, -150px, 0) rotate(0.001deg);
          }
          75% {
            transform: translate3d(0, 0, 0) rotate(0.001deg);
          }
        }
      `}</style>
    </div>
  );
}
