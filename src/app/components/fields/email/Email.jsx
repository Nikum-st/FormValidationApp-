export default function Email({ onChange, value }) {
	return (
		<label>
			Email:
			<input
				type="text"
				name="email"
				placeholder="Введите email"
				value={value}
				onChange={onChange}
			/>
		</label>
	);
}
