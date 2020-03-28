import Head from "next/head";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

const login = () => {
  const [name, setName] = useState("");
  const [gameCode, setGamecode] = useState("");
  const [email, setEmail] = useState("");
  const Swal = require("sweetalert2");

  const onNextClick = () => {
    console.log("gameCode is :", gameCode);
    console.log("name is :", name);
    console.log("email is :", email);

    axios({
      method: "post",
      url: "/users",
      baseURL: "http://134.122.24.222:3001/api/",
      data: {
        gamecode: gameCode,
        name: name,
        email: email
      }
    })
      .then(function(response) {
        console.log("response", response);
        // var tempString = response.data.message.length;
        // console.log("tempstring:", tempString);
        // if (tempString == 30) {
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          confirmButtonText: "ok"
        });
        Router.push("/splashscreens");
        // } else {
        //   Swal.fire({
        //     title: "Login Failed!",
        //     icon: "error",
        //     confirmButtonText: "ok"
        //   });
        // }
      })
      .catch(function(error) {
        console.log("error", error);
        // Swal.fire({
        //   title: "Server is not responding",
        //   text: "Please try again later.",
        //   icon: "error",
        //   confirmButtonText: "ok"
        // });
        Swal.fire({
          title: "Login Failed!",
          icon: "error",
          confirmButtonText: "ok"
        });
      });
  };

  return (
    <div className="login">
      <div className="login-form">
        <h3>Hello There</h3>
        <form>
          <div className="login-form-container">
            <div className="input-wrap">
              <div className="form-input game-code">
                <input
                  type="password"
                  placeholder="Game Code"
                  onChange={e => {
                    setGamecode(e.target.value);
                  }}
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Name"
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <a className="btn btn-block" onClick={onNextClick}>
              Next
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
