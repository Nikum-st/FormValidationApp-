import React, { forwardRef } from 'react';

const Email = forwardRef(({ onChange, value }, ref) => {
	return (
		<label>
			Email:
			<input
				type="text"
				name="email"
				placeholder="Введите email"
				value={value}
				onChange={onChange}
				ref={ref}
			/>
		</label>
	);
});

export default Email;
