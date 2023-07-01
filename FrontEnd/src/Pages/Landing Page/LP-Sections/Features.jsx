import image from "../../../assets/F_section.jpg";

export default function Features() {
	return (
		<>
			<div className="Features">
				<div className="f-heading">
					<h1>Spendify's Features</h1>
				</div>
				<div className="f-content">
					<ul className="f-list">
						<li>
							<h2>Smart Budgeting</h2>
							<p className="f_list-dscrp">
								Our intelligent budget planning keeps tabs on your expenses.
							</p>
						</li>
						<li>
							<h2>Efficient Tracking</h2>
							<p className="f_list-dscrp">
								Never lose a single transaction from your sight.
							</p>
						</li>
						<li>
							<h2>User-friendly App</h2>
							<p className="f_list-dscrp">
								Simple, smooth, and intuitive – everything you need in an app!
							</p>
						</li>
					</ul>
						<div className="f-img-container">
							<img src={image} alt="" className="f-img" />
						</div>
				</div>
			</div>
		</>
	);
}
