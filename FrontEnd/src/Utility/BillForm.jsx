import { useState } from "react";
import "../Pages/Main Page/Main.css";

export default function BillForm() {
	const [billInfo, setBill] = useState({
		amount: 0,
		tag: "",
	});

	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setBill((prevBill) => ({
			...prevBill,
			[name]: value,
		}));
	}

	return (
		<>
			<div className="form-container">
				<p className="title"> BILL</p>
				<form action="" className="form" onSubmit={handleSubmit}>
					<div className="input-group">
						<label htmlFor="">Amount</label>
						<input
							type="number"
							value={billInfo.amount}
							onChange={handleChange}
							name="amount"
						/>
					</div>
					<div className="input-group">
						<label htmlFor="">Tag</label>
						<input
							type="text"
							value={billInfo.tag}
							onChange={handleChange}
							name="tag"
						/>
                    </div>
                    <br />
					<div className="b-button-container" onClick={handleSubmit}>
						<button className="sign">
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
