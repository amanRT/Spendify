import img from "../../../assets/Expense_img.jpg";

export default function Expense() {
	return (
		<section className="Expense">
			<div className="e-content">
				<div className="button-container">
					<div className="e-heading">
						<h1>TRACK YOUR EXPENSE...</h1>
					</div>
					<button className="expense-button">
						<span>Check Expense</span>
					</button>
				</div>
				<div className="e-img-container">
					<img src={img} alt="" />
				</div>
			</div>
		</section>
	);
}
