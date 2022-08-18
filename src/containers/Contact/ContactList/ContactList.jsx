import ContactInfo from "./ContactInfo/ContactInfo";
import styles from "./ContactList.module.scss";

function ContactList({ children }) {
	return (
		<ul className={styles.ContactList}>
			{children}
		</ul>
	);
}

export default ContactList;
