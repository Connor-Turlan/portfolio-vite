import { useState } from "react";
import styles from "./App.module.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";

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
				<div className={styles.Body}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
