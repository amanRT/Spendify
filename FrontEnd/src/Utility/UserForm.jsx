import { useState } from "react";
import "../Pages/Main Page/Main.css";

export default function UserForm() {
	const [selectSchema, setSchema] = useState("");

	const [schema_info, setSchemaInfo] = useState({
		food: {
			budget: 0,
			price: 0,
		},
		travelling: {
			budget: 0,
			price: 0,
		},
		outing: {
			budget: 0,
			price: 0,
		},
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setSchemaInfo((prev) => ({
			...prev,
			[selectSchema]: {
				...prev[selectSchema],
				[name]: value,
			},
		}));
	}

	function select_Handler(event) {
		setSchema(event.target.value);
		console.log(selectSchema);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(schema_info);
	}
	return (
		<>
			<div className="form-container">
				<p className="title"> User Info</p>
				<form action="" className="form">
					<select
						className="schema-selector"
						onChange={select_Handler}
						value={selectSchema}
						name="select-schema"
					>
						<option value="">--Expense Type--</option>
						<option value="food">Food</option>
						<option value="travelling">Travelling</option>
						<option value="outing">Outing</option>
					</select>
					<div className="input-group">
						<label htmlFor="">Budget</label>
						<input
							type="number"
							value={selectSchema.budget}
							name="budget"
							onChange={handleChange}
						/>
					</div>

					<div className="input-group">
						<label htmlFor="">Price</label>
						<input
							type="number"
							value={selectSchema.price}
							name="price"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className="b-button-container" onClick={handleSubmit}>
						<button className="sign">Submit</button>
					</div>
				</form>
			</div>
		</>
	);
}
