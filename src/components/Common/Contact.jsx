import React from "react";
import "isomorphic-fetch";
import { createWhatsAppLink } from "../../utils/create-whatsapp-link";
import { WHATSAPP_NUMBER } from "../../utils/constants";

class Contact extends React.Component {
  state = {
    submitting: false,
    submitted: false,
    buttonState: "",
    formFields: {
      name: "",
      email: "",
      phone: "",
      text: "",
    },
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, text } = this.state.formFields;

    const message = `Olá Dra. Thais! \nEstou entrando em contato por meio do site. Meu nome é ${name} e meu email para contato é ${email}.\n\n${text}`;

    window.open(
      createWhatsAppLink(WHATSAPP_NUMBER, message),
      "_blank",
      "noreferrer"
    );
  };

  nameChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.name = e.target.value;
    this.setState({ formFields });
  };

  emailChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.email = e.target.value;
    this.setState({ formFields });
  };

  phoneChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.phone = e.target.value;
    this.setState({ formFields });
  };

  textChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.text = e.target.value;
    this.setState({ formFields });
  };

  onHideSuccess = () => {
    this.setState({ submitted: false });
  };

  successMessage = () => {
    if (this.state.submitted) {
      return (
        <div
          className="alert alert-success alert-dismissible fade show"
          style={{ marginTop: "20px", marginBottom: "0" }}
        >
          <strong>Thank you!</strong> Your message is send to the owner.
          <button
            type="button"
            className="btn-close"
            onClick={this.onHideSuccess}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
  };

  render() {
    return (
      <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div className="section-title">
            <h2>
              Entre em <span>Contato</span>
            </h2>

            <p>
              Envie uma mensagem para mim com suas dúvidas que irei responder o
              quanto antes. As mensagens serão enviadas pelo Whatsapp
              automaticamente.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <iframe
                title="Raio de atendimento"
                src="https://www.google.com/maps/d/embed?mid=1GCAGEVKm7915EgWqL2pAMBKHzwLXc24&ehbc=2E312F"
                width="100%"
                height="392"
              ></iframe>

              <div className="contact-info">
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> São Paulo, Santo André,
                    São Caetano e Osasco
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:addax@gmail.com">
                      drathaiscoqueiro@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="tel:124412-2445515">(+11) 95161-8193</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <h4>Vamos Conversar?</h4>
                <form id="contactForm" onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          required={true}
                          data-error="Please enter your name"
                          value={this.state.formFields.name}
                          onChange={this.nameChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          required={true}
                          data-error="Please enter your email"
                          value={this.state.formFields.email}
                          onChange={this.emailChangeHandler}
                        />
                      </div>
                    </div>

                    {/* <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="number">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="number"
                          id="number"
                          required={true}
                          data-error="Please enter your number"
                          value={this.state.formFields.phone}
                          onChange={this.phoneChangeHandler}
                        />
                      </div>
                    </div> */}

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="4"
                          required={true}
                          data-error="Write your message"
                          value={this.state.formFields.text}
                          onChange={this.textChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Enviar Mensagem
                      </button>
                      {this.successMessage()}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
