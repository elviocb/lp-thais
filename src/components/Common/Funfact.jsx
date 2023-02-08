import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Funfact extends React.Component {
  state = {
    didViewCountUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <section className="funFacts-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 d-flex justify-content-center">
              <div className="funFact">
                <i className="fa fa-check"></i>
                <h2 className="count">
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    offset={{
                      top: 10,
                    }}
                    delayedCall
                  >
                    <CountUp
                      start={0}
                      end={this.state.didViewCountUp ? 1500 : 0}
                      duration={6}
                    />
                  </VisibilitySensor>
                </h2>
                <p>Canais tratados</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-4 d-flex justify-content-center">
              <div className="funFact">
                <i className="fa fa-trophy"></i>
                <h2 className="count">
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    offset={{
                      top: 10,
                    }}
                    delayedCall
                  >
                    <CountUp
                      start={0}
                      end={this.state.didViewCountUp ? 5 : 0}
                      duration={6}
                    />
                  </VisibilitySensor>
                </h2>
                <p>Anos de atuação</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-4 d-flex justify-content-center">
              <div className="funFact">
                <i className="fa fa-users"></i>
                <h2>
                  <span className="count">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? 30 : 0}
                        duration={6}
                      />
                    </VisibilitySensor>
                  </span>
                </h2>
                <p>Indicadores parceiros</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Funfact;
