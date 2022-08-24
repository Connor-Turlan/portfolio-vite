import AboutCard from "../../components/AboutCard/AboutCard";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import CardList from "../../components/CardList/CardList";
import LanguageCard from "../../components/LanguageCard/LanguageCard";
import styles from "./Home.module.scss";

function Home(props) {
	return (
		<main className={styles.Home}>
			<CardList>
				<BusinessCard></BusinessCard>
				<AboutCard></AboutCard>
				<LanguageCard></LanguageCard>
			</CardList>
		</main>
	);
}

export default Home;
