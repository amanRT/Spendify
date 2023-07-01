import Squiggle from "../../../assets/Squiggle.png";

export default function Hero() {
	return (
		<>
			<section className="Hero">
				<div className="slogan-container">
					<div className="brand-slogan">
						<h1>Unleash Your Finances with Spendify</h1>
					</div>
					<button className="getStarted">Get Started Now</button>
				</div>
				<div className="img-section">
					<img src={Squiggle} alt="" className="image"/>
				</div>
			</section>
		</>
	);
}
