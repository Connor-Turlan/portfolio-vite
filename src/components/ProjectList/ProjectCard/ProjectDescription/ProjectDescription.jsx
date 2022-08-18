import styles from "./ProjectDescription.module.scss";

function ProjectDescription({ data }) {
	const { title, content } = data;
	return (
		<section className={styles.ProjectDescription}>
			<h2 className={styles.ProjectDescription__Heading}>{title}</h2>
			<p className={styles.ProjectDescription__Body}>{content}</p>
		</section>
	);
}

export default ProjectDescription;
