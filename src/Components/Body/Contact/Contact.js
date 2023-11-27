import React, { Component } from "react";
import image from "./images/about.jpg";
import {Form} from "reactstrap"


class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }
  render() {
    return (
      <div className="about-section">
        <div className="container">
          <div classNam="row">
            <div className="col-12">
              <div className="top">
                <h1 className="tophead">Contact Us</h1>
                <p className="toptext">
                  We align leaders around a shared purpose and strategic story
                  that catalyzes their business and brand to take action.
                </p>
              </div>
            </div>
          </div>
          <div className="row contactbody">
            <div className="col-6 contractImg">
              <div className="contactleft">
                <img src={image} alt="" className="contactsecimg"></img>
              </div>
            </div>
            <div className="col-6 contactsCard">
              <div className="col-6 contactcard">
                <div className="contactright1">
                  <h5>CONTACT US</h5>
                  <p>Contact us for a quote. Help or to join the team.</p>
                  <div className="contactsclicon">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-discord"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 contactcard">
                <div className="contactright2">
                  <i class="fas fa-map-marker-alt"></i>
                  <h5>ADDRESS:</h5>
                  <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                </div>
              </div>
              <div className="col-6 contactcard">
                <div className="contactright3">
                  <i class="fas fa-map-marker-alt"></i>
                  <h5>EMAIL:</h5>
                  <p>mdtarekrahman209@gmail.com mdtarekrahman210@gmail.com </p>
                </div>
              </div>
              <div className="col-6 contactcard">
                <div className="contactright4">
                  <i class="fas fa-map-marker-alt"></i>
                  <h5>CALL US:</h5>
                  <p>1 (234) 567-891 1 (234) 987-654</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="contactDiv">
              <Form className="contactForm">
                <label>Name</label>
                <input
                  name="name"
                  value={this.state.name}
                  placeholder="Name"
                ></input>
                <label>Email</label>
                <input
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                ></input>
                <label>Subject</label>
                <input
                  name="subject"
                  value={this.state.subject}
                  placeholder="Subject"
                ></input>
                <label>Message</label>
                <textarea
                  name="message"
                  value={this.state.message}
                  placeholder="Your message"
                  className="textAreaMsg"
                ></textarea>

                <button>Submit</button>
              </Form>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.6640154528625!2d89.05339255273527!3d23.204857423784446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff23368bb500f1%3A0x32fa50ec748952d2!2z4Ka54Ka-4Kas4Ka_4KayIOCmruCmvuCmsOCnjeCmleCnh-Cmnw!5e0!3m2!1sen!2sbd!4v1647000265823!5m2!1sen!2sbd"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                title="googleMap"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
}
}
export default Contact;
