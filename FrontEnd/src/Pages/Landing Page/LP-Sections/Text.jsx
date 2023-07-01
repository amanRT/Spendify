import t_squiggle from "../../../assets/Text-section squiggle.jpg";
import b_squiggle from "../../../assets/T_section.jpg";

export default function Text() {
	return (
		<>
			<section className="Text">
				<div className="content">
					<div className="t_image-container">
						<img src={t_squiggle} className="text-image" />
					</div>
					<div className="text-container">
						<h1>Revolution</h1>
						<p>
							Experience the future of expense tracking with Spendify. We’re
							breaking barriers, exceeding expectations, and forever changing
							the way individuals and businesses manage their finances.
						</p>
						<div className="t_image-container-2">
							<img src={b_squiggle} alt="" className="t_image"/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
