import { useState } from "react";

function Loginform() {
  const [ControlledEmail, setControlledEmail] = useState("");
  const [ControlledPassword, setControlledPassword] = useState("");

  const controlledonSubmit = (e) => {
    e.preventDefault();
    console.log(ControlledEmail, ControlledPassword);
  };

  const uncontrolledonSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValues = Object.fromEntries(formData);
    console.log(inputValues);
  };

  return (
    <>
      <h1>Kontrolliertes Formular:</h1>
      <form onSubmit={controlledonSubmit}>
        <fieldset>
          <label htmlFor="controlledEmail">E-Mail</label>
          <input
            name="controlledEmail"
            id="controlledEmail"
            type="text"
            value={ControlledEmail}
            placeholder="E-Mail"
            onChange={(e) => setControlledEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="controlledPassword">Password</label>
          <input
            name="controlledPassword"
            id="controlledPassword"
            type="text"
            value={ControlledPassword}
            placeholder="Password"
            onChange={(e) => setControlledPassword(e.target.value)}
          />
        </fieldset>
        <p>Kontrolliertes Formular Email: {ControlledEmail}</p>
        <p>Kontrolliertes Formular Password: {ControlledPassword}</p>
        <input type="submit" />
      </form>
      <h1>Unkonrolliertes Formular:</h1>
      <form onSubmit={uncontrolledonSubmit}>
        <fieldset>
          <label htmlFor="uncontrolledEmail">E-Mail</label>
          <input
            name="uncontrolledEmail"
            id="uncontrolledEmail"
            type="text"
            placeholder="E-Mail"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Password</label>
          <input
            name="uncontrolledPassword"
            id="uncontrolledPassword"
            type="text"
            placeholder="Password"
          />
        </fieldset>
        <input type="submit" />
      </form>
    </>
  );
}

export default Loginform;
