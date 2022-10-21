import Card from "../CardList/Card/Card";
import styles from "./LanguageCard.module.scss";

function LanguageCard(props) {
	return (
		<Card isEven={false} className={styles.LanguageCard}>
			<h2 className={styles.LanguageCard__Title}>Languages and Tools</h2>
			<div className={styles.LanguageCard__Grid}>
				<i className="devicon-c-plain"></i>
				<i className="devicon-cplusplus-plain"></i>
				<i className="devicon-csharp-plain"></i>
				<i className="devicon-python-plain-wordmark"></i>
				<i className="devicon-pytest-plain-wordmark"></i>
				<i className="devicon-html5-plain-wordmark"></i>
				<i className="devicon-css3-plain-wordmark"></i>
				<i className="devicon-sass-plain"></i>
				<i className="devicon-javascript-plain"></i>
				<i className="devicon-jest-plain" title="Jest"></i>
				<i className="devicon-nestjs-plain-wordmark"></i>
				<i className="devicon-react-original-wordmark"></i>
				<i className="devicon-vuejs-plain-wordmark"></i>
				<i className="devicon-mysql-plain-wordmark"></i>
				<i className="devicon-sqlite-plain-wordmark"></i>
				<i className="devicon-firebase-plain-wordmark"></i>
				<i className="devicon-java-plain-wordmark"></i>
				<i className="devicon-spring-plain-wordmark"></i>
				<i className="devicon-bash-plain" title="Bash"></i>
				<i className="devicon-github-original-wordmark"></i>
			</div>
		</Card>
	);
}

export default LanguageCard;
