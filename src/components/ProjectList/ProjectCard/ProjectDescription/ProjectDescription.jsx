import styles from "./ProjectDescription.module.scss";

function ProjectDescription({ title, content }) {
	return (
		<section className={styles.ProjectDescription}>
			<h2 className={styles.ProjectDescription__Heading}>{title}</h2>
			<p>{content}</p>
		</section>
	);
}

export default ProjectDescription;
