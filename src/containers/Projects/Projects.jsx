import CardList from "../../components/CardList/CardList";
import ProjectList from "../../components/ProjectList/ProjectList";
import styles from "./Projects.module.scss";
import projects from "../../data/projects.json";

function Projects(props) {
  return (
    <main className={styles.Projects}>
      <ProjectList projects={projects.reverse()} />
    </main>
  );
}

export default Projects;
