import emailjs from '@emailjs/browser';

import useInput from '../../hooks/use-input';

import Button from '../UI/Button';
import Wrapper from '../layout/Wrapper';
import styles from './Contact.module.css';
import FormBox from './FormBox';

type Props = {
	onSend: (status: boolean) => void;
};

const emailjsConfig = {
	service_id: 'none',
	template_id: 'none',
	user_id: 'none',
};

const Contact: React.FC<Props> = (props) => {
	const {
		enteredValue: enteredName,
		inputValueHandler: nameInputValueHandler,
		inputBlurHandler: nameInputBlurHandler,
		inputFocusHandler: nameInputFocusHandler,
		hasError: nameHasError,
		isFocus: nameIsFocus,
		isValid: nameIsValid,
		reset: nameReset,
	} = useInput((value) => value.trim().length > 2);

	const {
		enteredValue: enteredEmail,
		inputValueHandler: emailInputValueHandler,
		inputBlurHandler: emailInputBlurHandler,
		inputFocusHandler: emailInputFocusHandler,
		hasError: emailHasError,
		isFocus: emailIsFocus,
		isValid: emailIsValid,
		reset: emailReset,
	} = useInput((value) => value.includes('@'));

	const {
		enteredValue: enteredMsg,
		inputValueHandler: msgInputValueHandler,
		inputBlurHandler: msgInputBlurHandler,
		inputFocusHandler: msgInputFocusHandler,
		hasError: msgHasError,
		isFocus: msgIsFocus,
		isValid: msgIsValid,
		reset: msgReset,
	} = useInput((value) => value.trim().length > 11);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		props.onSend(true);

		nameInputBlurHandler();
		emailInputBlurHandler();
		msgInputBlurHandler();

		if (!nameIsValid || !emailIsValid || !msgIsValid) {
			props.onSend(false);
			return;
		}

		sendEmail();
	};

	const sendEmail = () => {
		const name = enteredName;
		const email = enteredEmail;
		const message = enteredMsg;

		emailjs
			.send(
				emailjsConfig.service_id,
				emailjsConfig.template_id,
				{
					from_name: name,
					from_email: email,
					message: message,
				},
				emailjsConfig.user_id
			)
			.then(
				function (response) {
					console.log(response);
					props.onSend(false);
					nameReset();
					emailReset();
					msgReset();
					alert('The message was sent.');
				},
				function (error) {
					console.error(error);
					props.onSend(false);
					alert('Sorry, there was an error while sending the message.');
				}
			);
	};

	return (
		<section className={styles.contact}>
			<Wrapper>
				<div className={styles.contact__info}>
					<h2>Contact</h2>
					<p>
						I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to
						you as soon as possible.
					</p>
				</div>
				<form
					onSubmit={submitHandler}
					className={styles.contact__form}>
					<FormBox
						label='name'
						id='name'
						type='text'
						value={enteredName}
						onBlur={nameInputBlurHandler}
						onChange={nameInputValueHandler}
						onFocus={nameInputFocusHandler}
						hasError={nameHasError}
						isValid={nameIsValid}
						isFocus={nameIsFocus}
						error={"Can't be blank"}
					/>
					<FormBox
						label='email'
						id='email'
						type='email'
						value={enteredEmail}
						onBlur={emailInputBlurHandler}
						onChange={emailInputValueHandler}
						onFocus={emailInputFocusHandler}
						hasError={emailHasError}
						isValid={emailIsValid}
						isFocus={emailIsFocus}
						error={"Can't be blank"}
					/>
					<FormBox
						label='message'
						id='msg'
						type='text'
						isTextarea={true}
						value={enteredMsg}
						onBlur={msgInputBlurHandler}
						onChange={msgInputValueHandler}
						onFocus={msgInputFocusHandler}
						hasError={msgHasError}
						isValid={msgIsValid}
						isFocus={msgIsFocus}
						error={"Can't be blank"}
					/>
					<Button type='submit'>send message</Button>
				</form>
			</Wrapper>
		</section>
	);
};

export default Contact;
