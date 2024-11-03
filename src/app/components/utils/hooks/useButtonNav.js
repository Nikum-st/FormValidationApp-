import { useRef } from 'react';

export default function useButtonNav() {
	const submitButtonRef = useRef(null);

	return {
		navigation: (email, password, repeatPassw) => {
			if (email && password.length === repeatPassw.length) {
				return submitButtonRef.current.focus();
			}
		},
		submitButtonRef,
	};
}
