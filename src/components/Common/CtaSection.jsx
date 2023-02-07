import React from "react";

import CtaButton from "./CtaButton";

class CtaSection extends React.Component {
  render() {
    return (
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <CtaButton />
          </div>
        </div>
      </div>
    );
  }
}

export default CtaSection;
