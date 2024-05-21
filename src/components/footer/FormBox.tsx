import { AnimatePresence, motion } from 'framer-motion';

import styles from './FormBox.module.css';

type Props = {
	label: string;
	type: string;
	id: string;
	isTextarea?: boolean;
	value: string;
	isValid: boolean;
	isFocus: boolean;
	hasError: boolean;
	error: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur: () => void;
	onFocus: () => void;
};

const FormBox: React.FC<Props> = (props) => {
	let classes;

	if (props.isFocus) {
		classes = styles.active;
	}

	if (props.hasError) {
		classes = styles.error;
	}

	if (!props.hasError && props.isValid) {
		classes = styles.valid;
	}

	return (
		<div className={`${styles.form__box} ${classes}`}>
			<motion.label
				initial={{
					opacity: props.isValid || props.hasError ? 1 : 0.5,
					top: props.isValid || props.hasError ? '80%' : '0%',
				}}
				animate={{
					opacity: props.isFocus ? 1 : props.isValid || props.hasError ? 1 : 0.5,
					top: props.isFocus ? '80%' : props.isValid || props.hasError ? '80%' : '0%',
				}}
				exit={{
					opacity: props.isValid || props.hasError ? 1 : 0.5,
					top: props.isValid || props.hasError ? '80%' : '0%',
				}}
				htmlFor={props.id}>
				{props.label}
			</motion.label>
			{props.isTextarea ? (
				<textarea
					id='msg'
					onFocus={props.onFocus}
					onChange={props.onChange}
					onBlur={props.onBlur}
					value={props.value}
				/>
			) : (
				<input
					type={props.type}
					id={props.id}
					onFocus={props.onFocus}
					onChange={props.onChange}
					onBlur={props.onBlur}
					value={props.value}
				/>
			)}
			<AnimatePresence>
				{props.hasError && (
					<>
						<motion.p
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
							exit={{ opacity: 0, x: '100%' }}
							className={styles['error-info']}>
							{props.error}
						</motion.p>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: [0, -10, 0, -10, 0], transition: { duration: 0.3 } }}
							exit={{ opacity: 0, x: 50 }}
							className={styles['error-ico']}>
							<div className={styles['error-ico-sign']} />
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FormBox;
