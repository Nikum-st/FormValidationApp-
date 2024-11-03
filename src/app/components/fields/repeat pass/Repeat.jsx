export default function Repeat({ onChange, value }) {
	return (
		<label>
			Повторите пароль:
			<input
				type="password"
				name="passwordRepeat"
				placeholder="Введите пароль еще раз"
				value={value}
				onChange={onChange}
			/>
		</label>
	);
}
