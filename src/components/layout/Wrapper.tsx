import { ReactNode } from 'react';
import styles from './Wrapper.module.css';

type Props = {
	children: ReactNode;
};

const Wrapper: React.FC<Props> = (props) => {
	return <div className={styles.wrapper}>{props.children}</div>;
};

export default Wrapper;
