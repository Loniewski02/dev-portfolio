import SocialsBar from '../layout/SocialsBar';
import Contact from './Contact';
import styles from './Footer.module.css';

type Props = {
	onSend: (status: boolean) => void;
};

const Footer: React.FC<Props> = (props) => {
	return (
		<footer
			className={styles.footer}
			id='contact'>
			<Contact onSend={props.onSend} />
			<SocialsBar isFooter={true} />
		</footer>
	);
};

export default Footer;
