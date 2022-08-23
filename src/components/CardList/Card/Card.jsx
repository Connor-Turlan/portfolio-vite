import styles from "./Card.module.scss";

function Card({ isEven, className, children }) {
	const card_class = [styles.Card];
	if (className) card_class.push(className);
	card_class.push(isEven ? styles.Odd : styles.Even);
	return <article className={card_class.join(" ")}>{children}</article>;
}

export default Card;
