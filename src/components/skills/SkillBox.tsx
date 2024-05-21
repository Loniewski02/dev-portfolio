import { motion } from 'framer-motion';

import styles from './SkillBox.module.css';

type Props = {
	skill: string;
	exp: number;
	index: number;
};

const animationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

const SkillBox: React.FC<Props> = (props) => {
	let text;

	if (props.exp === 1) text = `${props.exp} Year Experience`;
	if (props.exp > 1) text = `${props.exp} Years Experience`;
	if (props.exp < 1) text = 'Less than a year';

	return (
		<motion.div
			className={styles.skill__box}
			variants={animationVariants}
			initial='initial'
			whileInView='animate'
			viewport={{
				once: true,
			}}
			custom={props.index}>
			<h3>{props.skill}</h3>
			<p>{text}</p>
		</motion.div>
	);
};

export default SkillBox;
