import react from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Form() {
  const initialValue = { email: "", password: "", confirmPassword: "" };
  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [isValid, setIsValid] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(form));
    setSubmit(true);
    if (Object.keys(error).length === 0 && isSubmit) {
    } else {
      setIsValid(true);
    }
  };
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      navigate("/chat");
    }
  }, [error]);

  const validate = (values) => {
    const error = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 9) {
      error.password = "Password must be greater than 9 character";
    }
    if (!values.confirmPassword) {
      error.confirmPassword = "Confirm your password";
    } else if (form.password !== form.confirmPassword) {
      error.confirmPassword = "Password does not match";
    }
    return error;
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div>
          <p>{error.email}</p>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>{error.password}</p>
          <label for="Password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>{error.confirmPassword}</p>
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confim Your Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

