import styles from "./ContactInfo.module.scss";

function ContactInfo({ id, value, data }) {
	const { title, action, icon } = data;
	return (
		<li id={id} value={value} className={styles.ContactInfo}>
			<span
				className={styles.ContactInfo__Link}
				title={title}
				onClick={action}
			>
				<i className={icon}></i>
			</span>
		</li>
	);
}

export default ContactInfo;
