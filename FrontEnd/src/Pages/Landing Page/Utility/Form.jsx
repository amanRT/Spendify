import { useState } from "react";
import Popper from "./Popper";
import axios from "axios";

function Input({ name, user, f_name, type, handleChange }) {
  return (
    <div className="input-group">
      <label htmlFor="">{f_name}</label>
      <input type={type} value={user} onChange={handleChange} name={name} />
    </div>
  );
}

export default function Form() {
  //* Form State :
  const [form, setForm] = useState(false);

  function handleForm(params) {
    setForm((prev) => !prev);
  }

  //* User State :
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (user.password == user.cpassword || !form) {
      console.log(user);
      if (form) {
        try {
          const { username, email, password } = user;
          const userData = {
            username,
            email,
            password,
          };
          const User = await axios.post(
            "http://localhost:3000/api/v1/register",
            userData
          );
          alert("You can log in now");
          //   console.log(User.data);
          //   return (
          //     <Popper
          //       className="alert-popper"
          //       open={alertOpen}
          //       handleClose={handleClose}
          //       text="You can login Now"
          //     />
          //   );
        } catch (error) {
          console.log("Error ", error);
        }
      }
    } else {
      console.log("Passwords Don't Match");
      setAOpen(true);
    }
  }

  //* Alert State :
  const [alertOpen, setAOpen] = useState(false);

  const handleClose = () => {
    setAOpen(false);
  };

  return (
    <div className="form-container">
      <p className="title">{form ? "Register" : "Login"}</p>
      <form action="" className="form" onSubmit={handleSubmit}>
        {form && (
          <Input
            f_name="Username"
            user={user.username}
            handleChange={handleChange}
            name="username"
            type="text"
          />
        )}
        <Input
          f_name="Email"
          user={user.email}
          handleChange={handleChange}
          name="email"
          type="text"
        />
        <Input
          f_name="Password"
          user={user.password}
          handleChange={handleChange}
          name="password"
          type="password"
        />
        {form && (
          <Input
            f_name="Confirm Password"
            user={user.cpassword}
            handleChange={handleChange}
            name="cpassword"
            type="password"
          />
        )}
        <br />
        <div className="button-container">
          <button className="sign" onClick={handleSubmit}>
            {form ? "Sign up" : "Sign in"}
          </button>
        </div>
        <p className="signup">
          Don't have an account?
          <a
            rel="noopener noreferrer"
            href="#"
            className=""
            onClick={handleForm}
          >
            {form ? "Login" : "Register"}
          </a>
        </p>
        <Popper
          className="alert-popper"
          open={alertOpen}
          handleClose={handleClose}
          text="Passwords dont match"
        />
      </form>
    </div>
  );
}
