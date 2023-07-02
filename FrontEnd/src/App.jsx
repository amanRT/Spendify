import "./App.css";
import LandingPage from "./Pages/Landing Page/Landing Page";
import Main from "./Pages/Main Page/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/Spendify" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
