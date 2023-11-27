import React, { Component } from "react";
import { createRef } from "react";
import { Form } from "reactstrap";



class Login extends Component {
  constructor(props) {
    super(props);
    this.email = createRef();
    this.password = createRef();
  }

  formsubmit = (e) => {
    console.log(this.email.current.value)
    
    e.preventDefault();
  };

  render() {
    return (
      <div className="registration">
        <div className="container">
          <div className="row">
            <div className="regform">
              <Form className="form" onSubmit={(e) => this.formsubmit(e)}>
                <h1>Sign In</h1>
                <label>Email</label>
                <input type="email" ref={this.email} name="email"></input>
                <label>Password</label>
                <input
                  type="password"
                  ref={this.password}
                  name="password"
                ></input>
                <button>Sign In</button>
                <div className="formoverlay"></div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
