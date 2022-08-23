import Card from "../CardList/Card/Card";
import styles from "./LanguageCard.module.scss";

function LanguageCard(props) {
	return (
		<Card isEven={false} className={styles.LanguageCard}>
			<h2 className={styles.LanguageCard__Title}>Languages</h2>
			<ul className={styles.LanguageCard__Grid}>
				<li className={styles.LanguageCard__Icon}>
					<i class="devicon-c-plain"></i>
				</li>
				<li className={styles.LanguageCard__Icon}>
					<i class="devicon-cplusplus-plain"></i>
				</li>
				<li className={styles.LanguageCard__Icon}>
					<i class="devicon-csharp-plain"></i>
				</li>
				<li className={styles.LanguageCard__Icon}>
					<i class="devicon-python-plain"></i>
				</li>
				<li className={styles.LanguageCard__Icon}>
					<i class="devicon-javascript-plain"></i>
				</li>
				<li className={styles.LanguageCard__Icon}>
					<i class="devicon-html5-plain-wordmark"></i>
				</li>
				<li className={styles.LanguageCard__Icon}>
					<i class="devicon-css3-plain-wordmark"></i>
				</li>
				<li className={styles.LanguageCard__Icon}>
					<i class="devicon-mysql-plain-wordmark"></i>
				</li>
			</ul>
		</Card>
	);
}

export default LanguageCard;
