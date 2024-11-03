import { useState } from 'react';

export default function useShowPassword() {
	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	return {
		showPassword,
		toggleShowPassword,
	};
}
