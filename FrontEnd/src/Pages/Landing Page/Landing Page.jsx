import "./Landing.css";
import Hero from "../Landing Page/LP-Sections/Hero";
import Text from "../Landing Page/LP-Sections/Text";
import Features from "../Landing Page/LP-Sections/Features";
import Review from "../Landing Page/LP-Sections/Review";
import Footer from "../Landing Page/LP-Sections/Footer";

export default function LandingPage() {
	return (
		<>
			<Hero/>
			<Text />
			<Features />
			<Review />
			<Footer />
		</>
	);
}
