import styles from "./ProjectPreview.module.scss";

function ProjectPreview(props) {
	return (
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
	);
}

export default ProjectPreview;
