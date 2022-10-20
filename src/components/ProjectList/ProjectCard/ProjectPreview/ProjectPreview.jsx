import styles from "./ProjectPreview.module.scss";

const convertLanguagesToIcons = (language) => {
	switch (language) {
		case "html":
			return <i className="devicon-html5-plain" title={language}></i>;
		case "css":
			return <i className="devicon-css3-plain" title={language}></i>;
		case "sass":
			return <i className="devicon-sass-plain" title={language}></i>;
		case "javascript":
			return (
				<i className="devicon-javascript-plain" title={language}></i>
			);
		case "react":
			return <i className="devicon-react-original" title={language}></i>;
		case "firebase":
			return <i className="devicon-firebase-plain" title={language}></i>;
		case "jest":
			return <i className="devicon-jest-plain" title={language}></i>;
		case "java":
			return <i className="devicon-java-plain" title={language}></i>;
		case "python":
			return <i className="devicon-python-plain" title={language}></i>;
		case "spring":
			return <i className="devicon-spring-plain" title={language}></i>;
		case "django":
			return <i className="devicon-django-plain" title={language}></i>;
		default:
			return <i className="devicon-html5-plain" title={language}></i>;
	}
};

function ProjectPreview({ index, title, data }) {
	const { image, project_link, source_link, languages } = data;

	const preview_class =
		index % 2
			? [styles.ProjectPreview__Image, styles.Odd].join(" ")
			: [styles.ProjectPreview__Image, styles.Even].join(" ");

	return (
		<section className={styles.ProjectPreview}>
			<a href={project_link} className={styles.ProjectPreview__Link}>
				<img src={image} alt={title} className={preview_class} />
			</a>
			<p className={styles.ProjectPreview__Languages}>
				{languages.map((language) => convertLanguagesToIcons(language))}
				|
				<a className={styles.ProjectPreview__Source} href={source_link}>
					<i className="devicon-github-original colored"></i>
				</a>
			</p>
		</section>
	);
}

export default ProjectPreview;
