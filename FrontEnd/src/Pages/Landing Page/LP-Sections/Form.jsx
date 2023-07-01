import { useState } from "react";

export default function Form() {
	const [person, setPerson] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setPerson((oldPerson) => ({
			...oldPerson,
			[name]: value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(person);
	}

	return (
		<div className="form-container">
			<form action="" className="create" onSubmit={handleSubmit}>
				<div className="form-field">
					<label htmlFor="">Name : </label>
					<input
						type="text"
						value={person.name}
						onChange={handleChange}
						name="name"
					/>
				</div>
				<div className="form-field">
					<label htmlFor="">Email : </label>
					<input
						type="text"
						value={person.email}
						onChange={handleChange}
						name="email"
					/>
				</div>
				<div className="form-field">
					<label htmlFor="">Password : </label>
					<input
						type="password"
						value={person.password}
						onChange={handleChange}
						name="password"
					/>
				</div>
				<div className="form-field">
					<label htmlFor="">Confirm Password : </label>
					<input
						type="password"
						value={person.cpassword}
						onChange={handleChange}
						name="cpassword"
					/>
				</div>
				<div className="button-container">
					<button className="btn btn-primary submit">Submit</button>
				</div>
			</form>
		</div>
	);
}
