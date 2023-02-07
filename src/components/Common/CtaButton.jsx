import React from "react";

class CtaButton extends React.Component {
  render() {
    const url = `https://wa.me/5511951618193?text=Ol%C3%A1!%20Sou%20indicador%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`;

    return (
      <a
        href={url}
        className="btn btn-primary cta-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp" />
        Entre em contato
      </a>
    );
  }
}

export default CtaButton;
