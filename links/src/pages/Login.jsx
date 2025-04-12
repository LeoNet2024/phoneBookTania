import classes from "./page.module.css";
import classesLogIn from "./login.module.css";

import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import { users } from "../data/users";

import { checkUserName, checkPassword } from "../functions/validation";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [showPass, setShowPass] = useState("password");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [vertify, setVertify] = useState(false);

  function handleChangeUn(e) {
    setUserName(e.target.value);
  }

  function handleChangeUp(e) {
    setPassword(e.target.value);
  }

  function handleSubmit() {
    let result =
      checkUserName(userName) &&
      checkPassword(password) &&
      users.find((el) => el.password === password && el.userName === userName);

    if (result) setVertify(true);
  }

  if (vertify) return <Navigate to={"/home"} />;
  else
    return (
      <div className={classes.page}>
        <main>
          <h2>Log in</h2>
          <form action="" autoComplete="off">
            <div className={classesLogIn.container}>
              <div>
                <label>User Name</label>

                <input
                  type="text"
                  placeholder="User name"
                  minLength={6}
                  pattern="[A-za-z1-9]{6,12}"
                  required
                  onChange={(e) => handleChangeUn(e)}
                />
                <p className={classesLogIn.passUserDetails}>
                  {" "}
                  User name must contains letters and numbers only
                </p>
              </div>
              <div>
                <label>Password</label>
                <input
                  type={showPass}
                  placeholder="Enter password"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="invalid password"
                  onChange={(e) => handleChangeUp(e)}
                />
                <FaEyeSlash
                  onClick={() =>
                    setShowPass((prev) =>
                      prev === "text" ? "password" : "text"
                    )
                  }
                />
                <p className={classesLogIn.passUserDetails}>
                  password must contain at least Captial letter and Number
                </p>
              </div>

              <div>
                <button type="submit" onClick={() => handleSubmit()}>
                  Submit
                </button>
                <p>user name: leonleon</p>
                <p>Password: leonleon</p>
              </div>
            </div>
          </form>
        </main>
      </div>
    );
}
