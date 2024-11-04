import React, { forwardRef } from 'react';

const Repeat = forwardRef(({ onChange, value }, ref) => {
	return (
		<label>
			Повторите пароль:
			<input
				type="password"
				name="passwordRepeat"
				placeholder="Введите пароль еще раз"
				value={value}
				onChange={onChange}
				ref={ref}
			/>
		</label>
	);
});

export default Repeat;
