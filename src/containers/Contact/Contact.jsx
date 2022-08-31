import ContactList from "../../components/ContactList/ContactList";
import styles from "./Contact.module.scss";
import contacts from "../../data/contacts.json";
import ContactInfo from "../../components/ContactList/ContactInfo/ContactInfo";

function Contact() {
	// copy the content of the email contact element to the clipboard.
	const copyEmailToClipboard = () => {
		let text = document.getElementById("liEmail").getAttribute("value");
		navigator.clipboard.writeText(text);
		alert("Email copied to clipboard!");
	};

	// redirect a user to a specified link.
	const redirect = (link) => {
		window.location.href = link;
	};

	return (
		<main className={styles.Contact}>
			<h1 className={styles.Contact__Heading}>Contact me via:</h1>
			<ContactList>
				<ContactInfo
					key={-1}
					data={{
						title: "E-Mail",
						action: () => {
							copyEmailToClipboard();
						},
						icon: "fa fa-envelope",
					}}
					id="liEmail"
					value="connorturlan@gmail.com"
				/>
				{contacts.map((contact, index) => (
					<ContactInfo
						key={index}
						data={{
							...contact,
							action: (event) => {
								redirect(contact.link);
							},
						}}
					/>
				))}
			</ContactList>
		</main>
	);
}

export default Contact;
