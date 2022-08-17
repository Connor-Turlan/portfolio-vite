import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<BrowserRouter>
				<NavigationBar>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</NavigationBar>
				<Routes>
					<Route path="/" element={<p>Home</p>} />
					<Route path="/projects" element={<p>Projects</p>} />
					<Route path="/contact" element={<p>Contact</p>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
