import Squiggle from "../../../assets/Squiggle.png";
import { useState } from "react";
import LoginModal from "./LoginModal";

export default function Hero() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<section className="Hero">
				<div className="slogan-container">
					<div className="brand-slogan">
						<h1>Unleash Your Finances with Spendify</h1>
					</div>
					<button className="getStarted" onClick={handleOpen}>
						Get Started Now
					</button>
					<LoginModal open={open} handleClose={handleClose} />
				</div>
				<div className="img-section">
					<img src={Squiggle} alt="" className="image" />
				</div>
			</section>
		</>
	);
}
