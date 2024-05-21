import { useState } from 'react';

const useInput = (inpValidity: (value: string) => boolean) => {
	const [enteredValue, setEnteredValue] = useState<string>('');
	const [isTouched, setIsTouched] = useState<boolean>(false);
	const [isFocus, setIsFocus] = useState<boolean>(false);

	const isValid = inpValidity(enteredValue);
	const hasError = isTouched && !isValid;


	const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = () => {
		setIsTouched(true);
		setIsFocus(false);
	};

	const inputFocusHandler = () => {
		setIsFocus(true);
	};

	const reset = () => {
		setEnteredValue('');
		setIsTouched(false);
	};

	return {
		enteredValue,
		isValid,
		isFocus,
		hasError,
		inputBlurHandler,
		inputValueHandler,
		inputFocusHandler,
		reset,
	};
};

export default useInput;
