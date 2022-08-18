import ContactList from "./ContactList/ContactList";
import styles from "./Contact.module.scss";
import contacts from "../../data/contacts.json";
import ContactInfo from "./ContactList/ContactInfo/ContactInfo";

// copy the content of the email contact element to the clipboard.
function copyEmailToClipboard(event) {
	event.preventDefault();
	let text = document.getElementById("liEmail").getAttribute("value");
	navigator.clipboard.writeText(text);
	alert("Email copied to clipboard!");
}

function Contact() {
	return (
		<main className={styles.Contact}>
			<h1 className={styles.Contact__Heading}>Contact me via:</h1>
			<ContactList>
				<ContactInfo
					key={-1}
					data={{ title: "E-Mail", link: "", icon: "fa fa-envelope" }}
					id="liEmail"
					value="connorturlan@gmail.com"
					onClick={copyEmailToClipboard}
				/>
				{contacts.map((contact, index) => (
					<ContactInfo key={index} data={contact} />
				))}
			</ContactList>
		</main>
	);
}

export default Contact;
