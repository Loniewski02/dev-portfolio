import { useEffect, useState } from 'react';

import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import SocialsBar from './components/layout/SocialsBar';
import Footer from './components/footer/Footer';
import LoadingIndicator from './components/layout/LoadingIndicator';
import BackBtn from './components/UI/BackBtn';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const loadingHandler = (status: boolean) => {
		setIsLoading(status);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.scrollY > 750) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		handleResize();
		window.addEventListener('scroll', handleResize);

		return () => {
			window.removeEventListener('scroll', handleResize);
		};
	}, []);

	return (
		<>
			{isLoading && <LoadingIndicator />}
			<SocialsBar />
			<Header />
			<main>
				<AnimatePresence>{isVisible && <BackBtn />}</AnimatePresence>
				<Skills />
				<Projects onLoad={loadingHandler} />
			</main>
			<Footer onSend={loadingHandler} />
		</>
	);
};

export default App;
