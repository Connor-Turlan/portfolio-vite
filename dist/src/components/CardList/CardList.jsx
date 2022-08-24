import styles from "./CardList.module.scss";

function CardList({ className, children }) {
	return <div className={className}>{children}</div>;
}

export default CardList;
