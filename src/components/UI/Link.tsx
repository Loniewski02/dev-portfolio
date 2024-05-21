import { ReactNode } from 'react';
import styles from './Link.module.css';

type Props = {
	children: ReactNode;
	href: string;
	isBlank?: boolean;
};

const Link: React.FC<Props> = (props) => {
	return (
		<a
			href={props.href}
			className={styles.link}
			target={props.isBlank ? '_blank' : ''}
			rel='noopener noreferrer'>
			{props.children} <span />
		</a>
	);
};

export default Link;
