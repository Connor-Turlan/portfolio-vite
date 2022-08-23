import styles from "./ContactInfo.module.scss";

function ContactInfo({ data }) {
	const { title, link, icon } = data;
	return (
		<li className={styles.ContactInfo}>
			<a className={styles.ContactInfo__Link} title={title} href={link}>
				<i className={icon}></i>
			</a>
		</li>
	);
}

export default ContactInfo;
