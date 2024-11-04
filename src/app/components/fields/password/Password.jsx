import React, { forwardRef } from 'react';

const Password = forwardRef(({ onChange, value }, ref) => {
	return (
		<label>
			Пароль:
			<input
				type="password"
				name="password"
				placeholder="Придумайте пароль"
				value={value}
				onChange={onChange}
				ref={ref}
			/>
		</label>
	);
});

export default Password;
