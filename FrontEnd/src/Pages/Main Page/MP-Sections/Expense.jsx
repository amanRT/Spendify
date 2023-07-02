import img from "../../../assets/Expense_img.jpg";
import { useState } from "react";
import EFormModal from "../../../Utility/EFormModal";
export default function Expense() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => setOpen(false);
	return (
		<section className="Expense">
			<div className="e-content">
				<div className="button-container">
					<div className="e-heading">
						<h1>TRACK YOUR EXPENSE...</h1>
					</div>
					<button onClick={handleOpen}>
						Check Expense
					</button>
				</div>
				<EFormModal open={open} handleClose={handleClose} />
				<div className="e-img-container">
					<img src={img} alt="" />
				</div>
			</div>
		</section>
	);
}
