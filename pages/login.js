import Head from "next/head";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";

const login = () => {
  const [name, setName] = useState("");
  const [gameCode, setGamecode] = useState("");
  const [email, setEmail] = useState("");

  const onNextClick = () => {
    console.log("gameCode is :", gameCode);
    console.log("name is :", name);
    console.log("email is :", email);
    Router.push("/splashscreens");

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
      })
      .catch(function(error) {
        console.log("error", error);
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
