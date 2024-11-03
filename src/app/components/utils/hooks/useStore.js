import { useState } from 'react';

const initialData = {
	email: '',
	password: '',
	repeatPassw: '',
	errors: {},
};

export default function useStore() {
	const [formData, setFormData] = useState(initialData);

	const setErrors = (newErrors) => {
		setFormData((prevData) => ({ ...prevData, errors: newErrors }));
	};

	const clearErrors = () => {
		setFormData((prevData) => ({ ...prevData, errors: {} }));
	};

	return {
		getFormData: () => formData,
		updateState: (fieldName, newValue) => {
			setFormData({ ...formData, [fieldName]: newValue });
		},
		deleteData: () => setFormData(initialData),
		setErrors,
		clearErrors,
	};
}
