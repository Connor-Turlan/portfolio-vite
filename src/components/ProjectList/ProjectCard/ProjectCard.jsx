import styles from "./ProjectCard.module.scss";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectPreview from "./ProjectPreview/ProjectPreview";

function ProjectCard({ index, project }) {
	project.description = {
		title: "JavaScript Calculator",
		content: "A calculator written with HTML, CSS, and JavaScript",
	};
	project.preview = {};
	const { title, content } = project.description;
	const { image, link, languages } = project.preview;
	const desc = <ProjectDescription title={title} content={content} />;
	const preview = <ProjectPreview></ProjectPreview>;

	return (
		<article className={styles.ProjectCard}>
			{index % 2 ? (desc, preview) : (preview, desc)}
		</article>
	);
}

export default ProjectCard;
