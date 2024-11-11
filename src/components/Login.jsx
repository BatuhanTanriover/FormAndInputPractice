import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("")
  // const [enteredPassword, setEnteredPassword] = useState("")
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid = 
  enteredValues.email !== "" && !enteredValues.email.includes("@")


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("basıldı");
    console.log(enteredValues);
  };

  function handleInputChange(idetifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [idetifier]: value,
    }));
  }

  // const handleEmailChange = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            value={enteredValues.email}
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email adress</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            value={enteredValues.password}
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
