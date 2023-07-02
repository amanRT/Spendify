import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<a className="navbar-brand" href="#">
					Spendify
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link" href="#">
								Home
							</Link>
						</li>
						<li className="nav-item ">
							<Link to="#" className="nav-link" href="#">
								Expense
							</Link>
						</li>
					</ul>
						<button type="button" className="btn btn-outline-danger">
							Logout
						</button>
				</div>
			</nav>
		</>
	);
}
