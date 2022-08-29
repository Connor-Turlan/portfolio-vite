import { useState } from "react";
import styles from "./App.module.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter, NavLink } from "react-router-dom";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";

function App() {
	const [count, setCount] = useState(0);
	const [page, setPage] = useState("");

	// handle page changes.
	let body = <Home />;
	switch (page) {
		default:
			body = <Home />;
			break;
		case "projects":
			body = <Projects />;
			break;
		case "contact":
			body = <Contact />;
			break;
	}

	return (
		<BrowserRouter>
			<div className={styles.App}>
				<NavigationBar>
					<NavLink onClick={() => setPage("")} to="/portfolio-vite/">
						Home
					</NavLink>
					<NavLink
						onClick={() => setPage("projects")}
						to="/portfolio-vite/?projects"
					>
						Projects
					</NavLink>
					<NavLink
						onClick={() => setPage("contact")}
						to="/portfolio-vite/?contact"
					>
						Contact
					</NavLink>
				</NavigationBar>
				<div className={styles.Body}>{body}</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
