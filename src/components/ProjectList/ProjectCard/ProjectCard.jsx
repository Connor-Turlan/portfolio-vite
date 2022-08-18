import styles from "./ProjectCard.module.scss";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectPreview from "./ProjectPreview/ProjectPreview";

function ProjectCard({ index, project }) {
	const { title } = project.description;
	const desc = <ProjectDescription data={project.description} />;
	const preview = (
		<ProjectPreview index={index} title={title} data={project.preview} />
	);

	const card_class =
		index % 2
			? [styles.ProjectCard, styles.Odd].join(" ")
			: [styles.ProjectCard, styles.Even].join(" ");
	return (
		<article className={card_class}>
			{index % 2 ? [preview, desc] : [desc, preview]}
		</article>
	);
}

export default ProjectCard;
