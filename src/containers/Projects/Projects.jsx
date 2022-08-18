import CardList from "../../components/CardList/CardList";
import ProjectList from "../../components/ProjectList/ProjectList";
import styles from "./Projects.module.scss";
import projects from "../../data/projects.json";

function Projects(props) {
	return <ProjectList projects={projects} />;
}

export default Projects;
