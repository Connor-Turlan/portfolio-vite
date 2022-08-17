import CardList from "../CardList/CardList";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";

function ProjectList(props) {
	return (
		<CardList className={styles.ProjectList}>
			<ProjectCard></ProjectCard>
		</CardList>
	);
}

export default ProjectList;
