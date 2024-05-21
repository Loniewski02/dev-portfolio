import { motion, useScroll, useTransform } from 'framer-motion';

import { useIsLarge, useIsMedium } from '../../hooks/utils';

import Wrapper from '../layout/Wrapper';

import profileMobile from '../../assets/profile-picture-mobile.png';
import styles from './Header.module.css';
import Link from '../UI/Link';

const Header: React.FC = () => {
	const { scrollY } = useScroll();
	const isLarge = useIsLarge();
	const isMedium = useIsMedium();

	let yLinkVar: number[] = [0, -20, -50, -20];
	if (isMedium) yLinkVar = [0, -20, 0, 20];
	if (isLarge) yLinkVar = [0, 50, 100, 170];

	let yTextVar: number[] = [0, -20, -50, 20];
	if (isMedium) yTextVar = [0, -20, 100, 170];
	if (isLarge) yTextVar = [0, 100, 200, 300];

	const profileOpacity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0.1]);
	const profileY = useTransform(scrollY, [0, 200], [0, -100]);

	const opacityText = useTransform(scrollY, [0, 200, 300], [1, 0.1, 0]);
	const scaleText = useTransform(scrollY, [0, 300], [1, 1.1]);
	const yText = useTransform(scrollY, [0, 200, 300, 400], yTextVar);

	const yLink = useTransform(scrollY, [0, 200, 300, 400], yLinkVar);
	const scaleLink = useTransform(scrollY, [0, 300], [1, 1.1]);

	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.header__hero}>
					<motion.img
						style={{ opacity: profileOpacity, y: profileY }}
						src={profileMobile}
						alt=''
						className={styles['header__hero-profile']}
					/>
				</div>
				<div className={styles.header__info}>
					<motion.h1 style={{ y: yText, scale: scaleText }}>
						Nice to meet you! I'm <span>Milosz</span>.
					</motion.h1>
					<motion.p style={{ scale: scaleText, opacity: opacityText }}>
						Based in the Poland, I'm a front-end developer passionate about building accessible web apps that users
						love.
					</motion.p>
					{/* <AnimatedText
						el='p'
						repeatDelay={20000}
						text={[
							"Based in the Poland, I'm a front-end developer",
							'passionate about building accessible web apps',
							'that users love. ',
						]}
					/> */}
					<motion.div style={{ y: yLink, scale: scaleLink }}>
						<Link href='#contact'>contact me</Link>
					</motion.div>
				</div>
			</Wrapper>
		</header>
	);
};

export default Header;
