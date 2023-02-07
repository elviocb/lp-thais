import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Link } from "react-router-dom";
import CtaSection from "./CtaSection";

const images = [
  require("../../assets/images/PHOTO-1.jpg"),
  require("../../assets/images/PHOTO-2.jpg"),
  require("../../assets/images/PHOTO-3.jpg"),
  require("../../assets/images/PHOTO-4.jpg"),
  require("../../assets/images/PHOTO-5.jpg"),
  require("../../assets/images/PHOTO-6.jpg"),
  require("../../assets/images/PHOTO-7.jpg"),
  require("../../assets/images/PHOTO-8.jpg"),
];

class Work extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <section id="work" className="work-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>
              Alguns <span>Trabalhos</span>
            </h2>
            <p>
              Logo abaixo você encontra alguns dos meus trabalhos realizados:
            </p>
          </div>
        </div>

        <div className="shorting">
          <div className="row m-0">
            <div className="col-lg-3 col-6 brand p-0">
              <div className="single-work">
                <img src={images[0]} alt="work-img" />

                <div className="work-content">
                  <h4>Dente 36</h4>
                </div>

                <Link
                  to="#"
                  className="popup-btn"
                  onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                >
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 design p-0">
              <div className="single-work">
                <img src={images[1]} alt="work-img" />

                <div className="work-content">
                  <h4>Dente 16</h4>
                </div>

                <Link
                  to="#"
                  className="popup-btn"
                  onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                >
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 graphic p-0">
              <div className="single-work">
                <img src={images[2]} alt="work-img" />

                <div className="work-content">
                  <h4>Dente 36</h4>
                </div>

                <Link
                  to="#"
                  className="popup-btn"
                  onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                >
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 photoshop p-0">
              <div className="single-work">
                <img src={images[3]} alt="work-img" />

                <div className="work-content">
                  <h4>Dente 15</h4>
                </div>

                <Link
                  to="#"
                  className="popup-btn"
                  onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                >
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 design p-0">
              <div className="single-work">
                <img src={images[4]} alt="work-img" />

                <div className="work-content">
                  <h4>Dente 36</h4>
                </div>

                <Link
                  to="#"
                  className="popup-btn"
                  onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                >
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 illustrator p-0">
              <div className="single-work">
                <img src={images[5]} alt="work-img" />

                <div className="work-content">
                  <h4>Dente 36</h4>
                </div>

                <Link
                  to="#"
                  className="popup-btn"
                  onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                >
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-6 illustrator p-0">
              <div className="single-work">
                <img src={images[6]} alt="work-img" />

                <div className="work-content">
                  <h4>Dente 27</h4>
                </div>

                <Link
                  to="#"
                  className="popup-btn"
                  onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                >
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-6 illustrator p-0">
              <div className="single-work">
                <img src={images[7]} alt="work-img" />

                <div className="work-content">
                  <h4>Dente 16</h4>
                </div>

                <Link
                  to="#"
                  className="popup-btn"
                  onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                >
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        <CtaSection />
      </section>
    );
  }
}

export default Work;
