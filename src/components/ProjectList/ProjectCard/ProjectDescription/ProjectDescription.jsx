import styles from "./ProjectDescription.module.scss";

function ProjectDescription({ title, content }) {
	const style = index % 2 ? styles.odd : styles.even;
	return (
		<>
			<section class="project__desc">
				<h2 class="project__heading">JavaScript Calculator</h2>
				<p>A calculator written with HTML, CSS, and JavaScript</p>
			</section>
			<section className={styles.ProjectDescription}>
				<h2 className={styles.ProjectDescription__Heading}>{title}</h2>
				<p>{content}</p>
			</section>
		</>
	);
}

export default ProjectDescription;
