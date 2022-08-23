import CardList from "../CardList/CardList";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";

function ProjectList({ projects }) {
	return (
		<CardList className={styles.ProjectList}>
			{projects.map((project, index) => (
				<ProjectCard
					key={index}
					index={index}
					project={project}
				></ProjectCard>
			))}
		</CardList>
	);
}

export default ProjectList;
