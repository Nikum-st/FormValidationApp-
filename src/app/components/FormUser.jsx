import useShowPassword from './utils/hooks/useShowPassword';
import useFormHandlers from './utils/hooks/useFormHandlers';
import useButtonNav from './utils/hooks/useButtonNav';
import FormUserLayout from './FormUserLayout';

export default function FormUser() {
	const { email, password, repeatPassw, errors, onSubmit, onChangeField } =
		useFormHandlers();
	const { toggleShowPassword, showPassword } = useShowPassword();
	const { navigation, submitButtonRef } = useButtonNav();
	navigation(email, password, repeatPassw);

	return (
		<FormUserLayout
			email={email}
			password={password}
			repeatPassw={repeatPassw}
			errors={errors}
			submitButtonRef={submitButtonRef}
			toggleShowPassword={toggleShowPassword}
			showPassword={showPassword}
			onSubmit={onSubmit}
			onChangeField={onChangeField}
		/>
	);
}
