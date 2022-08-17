import styles from "./ProjectPreview.module.scss";

const convertLanguagesToIcons = (language) => {
	switch (language) {
		case "html":
			return <i class="devicon-html5-plain" title={language}></i>;
		case "css":
			return <i class="devicon-css3-plain" title={language}></i>;
		case "sass":
			return <i class="devicon-sass-plain" title={language}></i>;
		case "javascript":
			return <i class="devicon-javascript-plain" title={language}></i>;
		case "react":
			return <i class="devicon-react-original" title={language}></i>;
		case "firebase":
			return <i class="devicon-firebase-plain" title={language}></i>;
		default:
			return <i class="devicon-html5-plain" title={language}></i>;
	}
};

function ProjectPreview({
	title,
	image,
	project_link,
	source_link,
	languages,
}) {
	return (
		<>
			<section class="project__preview">
				<a
					href="https://connor-turlan.github.io/JSCalculator"
					class="project__link"
				>
					<img
						src="../images/calculator.PNG"
						alt=""
						srcset=""
						class="project__img project__img--odd"
					/>
				</a>
				<p class="project__langs">
					<i class="devicon-html5-plain"></i>
					<i class="devicon-css3-plain"></i>
					<i class="devicon-javascript-plain"></i>|
					<a
						class="project__link"
						href="https://github.com/Connor-Turlan/JSCalculator"
					>
						<i class="devicon-github-original colored"></i>
					</a>
				</p>
			</section>
			<section className={styles.ProjectPreview}>
				<a href={project_link} className={styles.ProjectPreview__Link}>
					<img
						src={image}
						alt={title}
						className={styles.ProjectPreview__Image}
					/>
				</a>
				<p className={styles.ProjectPreview__Languages}>
					{languages.map((language) =>
						convertLanguagesToIcons(language)
					)}
					|
					<a class="project__link" href={source_link}>
						<i class="devicon-github-original colored"></i>
					</a>
				</p>
			</section>
		</>
	);
}

export default ProjectPreview;
