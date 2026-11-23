"use client";
import { useState } from "react";
import css from "./Form2.module.css";

const Form2 = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = () => {
    const data = {
      firsntame: firstname,
      lastname: lastname,
    };

    console.log(data);
  };

  return (
    <div className={css["form"]}>
      {firstname.length > 10 && <p>Занадто довге імя</p>}
      <input
        type="text"
        name="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <input
        type="text"
        name="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />

      <p>
        {firstname} {lastname}
      </p>

      <button onClick={handleSubmit}>Send Data</button>
    </div>
  );
};

export default Form2;
