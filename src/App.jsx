import {useEffect} from "react";

//aos
import AOS from "aos";
import "aos/dist/aos.css";

//components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

//styles
import "./scss/index.scss";

const App = () => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<>
			<Header />
			<main>
				<Hero />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
};

export default App;
