import { ReactNode } from 'react';
import styles from './Link.module.css';

type Props = {
	children: ReactNode;
	type: 'button' | 'submit' | 'reset';
};

const Button: React.FC<Props> = (props) => {
	return (
		<button
			type={props.type}
			className={styles.link}>
			{props.children}
			<span />
		</button>
	);
};

export default Button;
