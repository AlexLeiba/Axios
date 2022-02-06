import React, { useState, useEffect } from "react";
import { Input } from "../components/input/Input";
import { Button } from "../components/button/Button";
import { api } from "../api/IndexApi";
import { useNavigate } from "react-router-dom";
import { registrationSchema } from "../components/Validation/RegistrationSchema";

export function Registration() {
  const navigator = useNavigate();
  const [stateUsers, setUsers] = useState();

  //   Api get
  useEffect(() => {
    async function GetUsers() {
      try {
        const { data } = await api().requestApi().listUsers();
        setUsers(data[0].email);
      } catch (error) {
        console.log(`${error}`);
      }
      console.log("undefined bro");
    }
    GetUsers();
  }, []);

  console.log(stateUsers);

  // States
  const [formValue, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(nameId: string, value: string) {
    setForm((prevState) => ({
      ...prevState,
      [nameId]: value,
    }));
  }

  function handleDelete() {
    setForm({
      email: "",
      password: "",
    });
  }

  function handleCatchErrors(errorKey: string, errorMessage: string) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [errorKey]: errorMessage,
    }));
  }

  async function handleSubmit() {
    await registrationSchema.email
      .validate(formValue.email)
      .catch((error) => handleCatchErrors("email", error.message));

    await registrationSchema.password
      .validate(formValue.password)
      .catch((error) => handleCatchErrors("password", error.message));

    const isValidEmail = registrationSchema.email.isValid(formValue.email);
    const isValidPassword = registrationSchema.password.isValid(
      formValue.password
    );

    if (!isValidEmail || !isValidPassword) {
      return;
    }
    // daca ambele validari au valoarea true, va merge mai departe, daca nu
    // va iesi din functie

    // Call api, cu catch care va prinde eroarile!
    try {
      await api().requestApi().registration(formValue);
      //   numai daca requestul este de status 200  va executa functia (navigator!)
      navigator("/login");
    } catch (error) {
      console.log(`${error}`);
    }
  }

  return (
    <div style={{ width: "300px" }}>
      <h2>Registration</h2>
      <Input
        type="email"
        label="Email"
        id="email"
        value={formValue.email}
        handleChange={handleChange}
        error={errors.email}
      />
      <Input
        type="password"
        label="Password"
        id="password"
        value={formValue.password}
        handleChange={handleChange}
        error={errors.password}
      />
      <div style={{ display: "flex" }}>
        <Button type="submit" title="Submit" handleClick={handleSubmit} />
        <Button type="clear" title="Delete" handleClick={handleDelete} />
      </div>
    </div>
  );
}
