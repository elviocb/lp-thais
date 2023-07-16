import React from "react";
import { WHATSAPP_NUMBER } from "../../utils/constants";
import { createWhatsAppLink } from "../../utils/create-whatsapp-link";

class CtaButton extends React.Component {
  render() {
    const message = `Olá Dra. Thais! \nSou indicador e gostaria de mais informações.`;

    return (
      <a
        href={createWhatsAppLink(WHATSAPP_NUMBER, message)}
        className="btn btn-primary cta-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp" />
        {this.props.btnText}
      </a>
    );
  }
}

CtaButton.defaultProps = {
  btnText: "Entre em contato",
};

export default CtaButton;
