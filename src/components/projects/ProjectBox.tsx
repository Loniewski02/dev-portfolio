import { motion } from 'framer-motion';

import styles from './ProjectBox.module.css';
import Link from '../UI/Link';

const animationVariants = {
	initial: (index: number) => ({
		x: index % 2 == 0 ? -100 : 100,
		y: 200,
		opacity: 0,
	}),
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
	},
};

type Props = {
	index: number;
	title: string;
	liveUrl: string;
	codeUrl: string;
	img: string;
	tech: string[];
};

const ProjectBox: React.FC<Props> = ({ index, title, liveUrl, codeUrl, tech, img }) => {
	return (
		<motion.div
			className={styles.project}
			variants={animationVariants}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			custom={index}>
			<div className={styles.project__img}>
				<img
					src={img}
					alt=''
				/>
				<div className={styles['project__img-links']}>
					<Link
						href={liveUrl}
						isBlank={true}>
						view project
					</Link>
					<Link
						href={codeUrl}
						isBlank={true}>
						view code
					</Link>
				</div>
			</div>
			<h3 className={styles['project__title']}>{title}</h3>
			<p className={styles['project__built-with']}>{tech.join(' ')}</p>
			<div className={styles.project__links}>
				<Link
					href={liveUrl}
					isBlank={true}>
					view project
				</Link>
				<Link
					href={codeUrl}
					isBlank={true}>
					view code
				</Link>
			</div>
		</motion.div>
	);
};

export default ProjectBox;
