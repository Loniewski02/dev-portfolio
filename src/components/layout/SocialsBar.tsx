import { motion } from 'framer-motion';

import Wrapper from './Wrapper';

import githubIco from '../../assets/icons/icon-github.svg';
import frontendMentorIco from '../../assets/icons/icon-frontend-mentor.svg';
import linkedinIco from '../../assets/icons/icon-linkedin.svg';
import twitterIco from '../../assets/icons/icon-twitter.svg';
import styles from './SocialsBar.module.css';

const hoverEffect = { scale: 1.1, transition: { stiffness: 500, type: 'spring' } };

const SocialsBar: React.FC<{ isFooter?: boolean }> = (props) => {
	return (
		<nav className={`${styles.nav} ${props.isFooter ? styles.foot : ''}`}>
			<Wrapper>
				<p className={styles.nav__heading}>miloszloniewski</p>
				<div className={styles.nav__links}>
					<a
						href='https://github.com/Loniewski02'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='github'>
						<motion.img
							whileHover={hoverEffect}
							src={githubIco}
							alt=''
						/>
					</a>
					<a
						href='https://www.frontendmentor.io/profile/Loniewski02'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='frontend mentor'>
						<motion.img
							whileHover={hoverEffect}
							src={frontendMentorIco}
							alt=''
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/mi%C5%82osz-jan-%C5%82oniewski-49803b227/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='linkedin'>
						<motion.img
							whileHover={hoverEffect}
							src={linkedinIco}
							alt=''
						/>
					</a>
					<a
						href='https://twitter.com/Loniewski02'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='twitter'>
						<motion.img
							whileHover={hoverEffect}
							src={twitterIco}
							alt=''
						/>
					</a>
				</div>
			</Wrapper>
		</nav>
	);
};

export default SocialsBar;
