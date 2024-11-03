import styles from './Password.module.css';
export default function Password({ onChange, value, showPassword, toggleShowPassword }) {
	return (
		<label>
			Пароль:
			<input
				type={showPassword ? 'text' : 'password'}
				name="password"
				placeholder="Придумайте пароль"
				value={value}
				onChange={onChange}
			/>
			<button
				className={styles.showPasswordButton}
				type="button"
				onClick={toggleShowPassword}
			>
				{showPassword ? 'Скрыть' : 'Показать'} пароль
			</button>
		</label>
	);
}
