import Card from "../CardList/Card/Card";
import styles from "./BusinessCard.module.scss";

function BusinessCard(props) {
  return (
    <Card isEven={false} className={styles.BusinessCard}>
      <h2 className={styles.BusinessCard__Title}>Hi, my name is Connor!</h2>
      <h3 className={styles.BusinessCard__Subtitle}>This is me</h3>
      <article className={styles.BusinessCard__Content}>
        <ul className={styles.BusinessCard__List}>
          <li>Computer Scientist</li>
          <li>Software Engineer</li>
          <li>Programmer</li>
        </ul>
        <img
          src="images/connor.jpg"
          alt="Connor"
          className={styles.BusinessCard__Image}
        />
      </article>
    </Card>
  );
}

export default BusinessCard;
