import { motion } from 'framer-motion';

import styles from './BackBtn.module.css';

const BackBtn: React.FC = () => {
	return (
		<motion.a
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			exit={{ scale: 0 }}
			whileHover={{ scale: 1.1, transition: { stiffness: 500, type: 'spring' } }}
			href='#'
			aria-label='back'
			className={styles.back}
		/>
	);
};

export default BackBtn;
