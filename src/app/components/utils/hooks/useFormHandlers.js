import useStore from './useStore';
import { validateAndGetErrorMessages } from '../yup';

export default function useFormHandlers() {
	const { getFormData, updateState, deleteData, setErrors, clearErrors } = useStore();

	const { email, password, repeatPassw, errors } = getFormData();

	const onSubmit = (event) => {
		event.preventDefault();

		clearErrors();

		const formData = {
			email,
			password,
			repeatPassw,
		};

		const newErrors = validateAndGetErrorMessages(formData);

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		console.log(formData);
		deleteData();
	};

	const onChangeField =
		(field) =>
		({ target }) => {
			updateState(field, target.value);
			clearErrors();
		};

	return {
		email,
		password,
		repeatPassw,
		errors,
		onChangeField,
		onSubmit,
	};
}
