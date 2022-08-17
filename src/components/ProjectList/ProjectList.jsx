import CardList from "../CardList/CardList";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";

function ProjectList({ projects }) {
	return (
		<CardList className={styles.ProjectList}>
			<ProjectCard index={0} project={{}}></ProjectCard>
		</CardList>
	);
}

export default ProjectList;
