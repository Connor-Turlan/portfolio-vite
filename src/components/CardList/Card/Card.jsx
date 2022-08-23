import styles from "./Card.module.scss";

function Card({ isEven, children }) {
	const card_class = isEven
		? [styles.Card, styles.Odd].join(" ")
		: [styles.Card, styles.Even].join(" ");
	return <article className={card_class}>{children}</article>;
}

export default Card;
