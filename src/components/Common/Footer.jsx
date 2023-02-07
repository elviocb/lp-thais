import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <a className="footer-brand" href="/">
                <div className="footer-logo">
                  <Logo />
                </div>
              </a>
              <ul>
                <li>
                  <Link
                    to="https://m.facebook.com/profile.php?id=100089737572717"
                    className="fa fa-facebook"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/drathaiscoqueiro"
                    className="fa fa-instagram"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/thais-coqueiro-814268254"
                    className="fa fa-linkedin"
                    target="_blank"
                  ></Link>
                </li>
              </ul>
              <p>Dra. Thais Coqueiro | CRO 130495</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
