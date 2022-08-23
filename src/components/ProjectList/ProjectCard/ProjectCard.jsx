import Card from "../../CardList/Card/Card";
import styles from "./ProjectCard.module.scss";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectPreview from "./ProjectPreview/ProjectPreview";

function ProjectCard({ index, project }) {
	const { title } = project.description;
	const desc = <ProjectDescription data={project.description} />;
	const preview = (
		<ProjectPreview index={index} title={title} data={project.preview} />
	);

	return (
		<Card isEven={index % 2}>
			{index % 2 ? [preview, desc] : [desc, preview]}
		</Card>
	);
}

export default ProjectCard;
