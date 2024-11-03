import styles from './FormUser.module.css';
import Email from './fields/email/Email';
import Password from './fields/password/Password';
import Repeat from './fields/repeat pass/Repeat';

export default function FormUserLayout({
	email,
	password,
	repeatPassw,
	errors,
	onSubmit,
	onChangeField,
	showPassword,
	toggleShowPassword,
	submitButtonRef,
}) {
	return (
		<>
			<h1>Регистрация</h1>
			<form className={styles.formUser} onSubmit={onSubmit}>
				{Object.values(errors).map((err, index) =>
					err ? (
						<span key={index} className={styles.errors}>
							{err}
						</span>
					) : null,
				)}
				<Email onChange={onChangeField('email')} value={email} />
				<Password
					value={password}
					onChange={onChangeField('password')}
					showPassword={showPassword}
					toggleShowPassword={toggleShowPassword}
				/>

				<Repeat onChange={onChangeField('repeatPassw')} value={repeatPassw} />
				<button
					ref={submitButtonRef}
					className={styles.button}
					disabled={
						Object.values(errors).some((err) => err) ||
						email === '' ||
						password === '' ||
						repeatPassw === ''
					}
					type="submit"
				>
					Зарегистрироваться
				</button>
			</form>
		</>
	);
}
