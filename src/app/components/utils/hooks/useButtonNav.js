import { useRef } from 'react';

export default function useButtonNav() {
	const submitButtonRef = useRef(null);

	return {
		navigation: (getValues) => {
			const email = getValues('email');
			const password = getValues('password');
			const repeatPassw = getValues('repeatPassw');

			if (email && password.length === repeatPassw.length) {
				submitButtonRef.current.focus();
			}
		},
		submitButtonRef,
	};
}
