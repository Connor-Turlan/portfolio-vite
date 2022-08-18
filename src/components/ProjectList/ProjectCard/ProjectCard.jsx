import styles from "./ProjectCard.module.scss";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectPreview from "./ProjectPreview/ProjectPreview";

function ProjectCard({ index, project }) {
	project.description = {
		title: "JavaScript Calculator",
		content: "A calculator written with HTML, CSS, and JavaScript",
	};
	project.preview = {
		image: "public/images/calculator.PNG",
		project_link: "https://connor-turlan.github.io/JSCalculator",
		source_link: "https://github.com/Connor-Turlan/JSCalculator",
		languages: ["html", "css", "scss", "javascript"],
	};

	const { title } = project.description;
	const desc = <ProjectDescription data={project.description} />;
	const preview = <ProjectPreview title={title} data={project.preview} />;

	return (
		<article className={styles.ProjectCard}>
			{index % 2 ? [preview, desc] : [desc, preview]}
		</article>
	);
}

export default ProjectCard;
