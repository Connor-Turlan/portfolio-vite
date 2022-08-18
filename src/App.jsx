import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Projects from "./containers/Projects/Projects";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.App}>
			<BrowserRouter>
				<NavigationBar>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</NavigationBar>
				<Routes>
					<Route path="/" element={<p>Home</p>} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<p>Contact</p>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
