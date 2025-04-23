import classes from "./page.module.css";
import classesLogIn from "./login.module.css";

import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import { users } from "../data/users";

import { checkUserName, checkPassword } from "../functions/validation";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPass, setShowPass] = useState("password");
  const navigate = useNavigate();
  let vertify;
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
    conPassword: "",
  });

  function handleSubmit(e) {
    console.log("prevent");
    e.preventDefault();
    // cheking if the user Exists and also if the password the same
    if (userDetails.password !== userDetails.conPassword) {
      alert("passwords must be the same");
      return;
    }

    vertify = users.find(
      (el) =>
        el.userName === userDetails.userName &&
        el.password === userDetails.password
    );

    if (vertify) navigate("/home");
    else alert("password or user name is invalid");
  }

  function handleChange(e) {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className={classes.page}>
      <main>
        <h2>Log in</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className={classesLogIn.container}>
            <div>
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                minLength={6}
                pattern="[A-za-z1-9]{6,12}"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type={showPass}
                required
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                onChange={(e) => handleChange(e)}
              />
              <FaEyeSlash
                onClick={() =>
                  setShowPass((prev) => (prev === "text" ? "password" : "text"))
                }
              />
            </div>

            <div>
              <label>confirm Password</label>
              <input
                type={showPass}
                required
                name="conPassword"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <button type="submit" onClick={() => handleSubmit()}>
                Submit
              </button>
              <p>user name: leonleon</p>
              <p>Password: Leon1996</p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
