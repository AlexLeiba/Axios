import React, { useState, useEffect } from "react";
import { Input } from "../components/input/Input";
import { Button } from "../components/button/Button";
import { loginSchema } from "../components/Validation/LoginSchema";
import { api } from "../api/IndexApi";
import { useLocation } from "react-router-dom";

// request de tip get, intro functie asincrona, se executa numai la
// montarea paginii
export function Login() {
  useEffect(() => {
    async function getApi() {
      const { data } = await api().requestApi().getData();
      console.log(data);
      return data;
    }
    // apelam functia
    getApi();
  }, []);

  let locations = useLocation();
  const [loginValue, setLoginValue] = useState({
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    email: "",
  });

  function handleDelete() {
    setLoginValue({
      email: "",
      password: "",
    });
  }

  function handleChange(idName: string, targetValue: string) {
    setLoginValue((prevState) => ({
      ...prevState,
      [idName]: targetValue,
    }));
  }

  function handleCatchErrors(keyError: string, messageError: string) {
    setErrors((prevError) => ({
      ...prevError,
      [keyError]: messageError,
    }));
  }

  //   Submit.
  async function handleSubmit() {
    //   Extragem eroarile
    await loginSchema.email
      .validate(loginValue.email)
      .catch((error) => handleCatchErrors("email", error.message));

    await loginSchema.password
      .validate(loginValue.password)
      .catch((error) => handleCatchErrors("password", error.message));

    // Extragem daca este validat
    const isValidEmail = loginSchema.email.isValid(loginValue.email);
    const isValidPassword = loginSchema.password.isValid(loginValue.password);

    if (!isValidEmail || !isValidPassword) {
      return;
    }

    // request de tip POST , postam valoarea din input ce se afla in statul (loginValue)
    const { data, status } = await api().requestApi().login(loginValue);
    if (status === 200) {
      localStorage.setItem("token", data.token);

      console.log(locations.search);
    }
  }
  return (
    <div style={{ width: "300px" }}>
      <h2>Login</h2>
      <Input
        type="email"
        label="Email"
        id="email"
        value={loginValue.email}
        handleChange={handleChange}
        error={errors.email}
      />
      <Input
        type="password"
        label="Password"
        id="password"
        value={loginValue.password}
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
