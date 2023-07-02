import { useState } from "react";
import Popper from "./Popper";
import { Link } from "react-router-dom";
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
		name: "",
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
			//   console.log(user);
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
			} else {
				//login
				try {
					const { email, password } = user;
					const userData = {
						email,
						password,
					};
					const response = await axios.post(
						"http://localhost:3000/api/v1/login",
						userData
					);
					const { accessToken } = response.data; // Assuming the token is returned as accessToken

					localStorage.setItem("token", JSON.stringify({ accessToken }));
				} catch (error) {
					alert(error);
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
						user={user.name}
						handleChange={handleChange}
						name="name"
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
				<div className="button-container" onClick={handleSubmit}>
					<Link to="/Spendify" className="sign">
						{form ? "Sign up" : "Sign in"}
					</Link>
				</div>
				<br />
				<p className="signup">
					Don't have an account?
					<a rel="noopener noreferrer" href="#" onClick={handleForm}>
						{form ? "Login" : "Register"}
					</a>
				</p>
				<Popper
					className="alert-popper"
					open={alertOpen}
					handleClose={handleClose}
				/>
			</form>
		</div>
	);
}
