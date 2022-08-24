import Card from "../CardList/Card/Card";
import styles from "./AboutCard.module.scss";

function AboutCard(props) {
	return (
		<Card isEven={true} className={styles.AboutCard}>
			<h2 className={styles.AboutCard__Title}>About Me</h2>
			<article className={styles.AboutCard__Content}>
				<p>
					Studying Computer Science at The University of Adelaide,
					specialising in cybersecurity, has allowed Connor to indulge
					in his passion for creating and experimenting. He has
					developed outstanding knowledge in Python, C++, JavaScript,
					and SQL while also maintaining interests in languages and
					chemistry. Working in the Print and Copy section at
					Officeworks has allowed Connor to gain competency in
					providing customers with tailored solutions. In the future,
					Connor would like to work in software design directly with
					clients to design and develop software that caters to their
					needs. Outside of his career, Connor would like to give back
					to the community by providing better education by tutoring
					and helping others find employment.
				</p>
			</article>
		</Card>
	);
}

export default AboutCard;
