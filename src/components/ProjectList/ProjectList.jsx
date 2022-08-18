import CardList from "../CardList/CardList";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";

function ProjectList({ projects }) {
	return (
		<article className={styles.ProjectList}>
			{projects.map((project, index) => (
				<ProjectCard
					key={index}
					index={index}
					project={project}
				></ProjectCard>
			))}
		</article>
	);
}

export default ProjectList;
