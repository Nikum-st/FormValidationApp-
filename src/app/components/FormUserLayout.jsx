import styles from './FormUser.module.css';
import Email from './fields/email/Email';
import Password from './fields/password/Password';
import Repeat from './fields/repeat pass/Repeat';

export default function FormUserLayouta({
	control,
	sendFormData,
	errors,
	Controller,
	handleSubmit,
	submitButtonRef,
	watch,
}) {
	return (
		<>
			<h1>Регистрация</h1>
			<form className={styles.formUser} onSubmit={handleSubmit(sendFormData)}>
				{errors.email && (
					<span className={styles.errors}>{errors.email.message}</span>
				)}
				<Controller
					name="email"
					control={control}
					render={({ field }) => <Email {...field} />}
				/>
				{errors.password && (
					<span className={styles.errors}>{errors.password.message}</span>
				)}
				<Controller
					name="password"
					control={control}
					render={({ field }) => <Password {...field} />}
				/>

				{errors.repeatPassw && (
					<span className={styles.errors}>{errors.repeatPassw.message}</span>
				)}
				<Controller
					name="repeatPassw"
					control={control}
					render={({ field }) => <Repeat {...field} />}
				/>
				<button
					ref={submitButtonRef}
					className={styles.button}
					disabled={
						!watch('email') || !watch('password') || !watch('repeatPassw')
					}
					type="submit"
				>
					Зарегистрироваться
				</button>
			</form>
		</>
	);
}
