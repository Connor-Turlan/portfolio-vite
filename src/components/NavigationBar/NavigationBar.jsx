import { useState } from "react";
import styles from "./NavigationBar.module.scss";

function NavigationBar({ children }) {
	const [hidden, setHidden] = useState(true);

	return (
		<nav className={styles.NavigationBar}>
			<input type="checkbox" className={styles.NavigationBar__Toggle} />
			<label
				className={styles.NavigationBar__ToggleLabel}
				htmlFor="NavigationBar__Menu"
			></label>
			<h1 className={styles.NavigationBar__Icon}>Connor Turlan</h1>
			<div className={styles.NavigationBar__Buttons}>{children}</div>
		</nav>
	);
}

export default NavigationBar;
