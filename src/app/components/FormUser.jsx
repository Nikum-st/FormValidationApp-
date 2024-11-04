import React from 'react';
import useButtonNav from './utils/hooks/useButtonNav';
import { validationSchema } from './utils/yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormUserLayout from './FormUserLayout';

const sendFormData = (formData) => {
	console.log(formData);
};

export default function FormUser() {
	const {
		control,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			email: '',
			password: '',
			repeatPassw: '',
		},
	});

	const { navigation, submitButtonRef } = useButtonNav();

	navigation(getValues);

	return (
		<FormUserLayout
			watch={watch}
			submitButtonRef={submitButtonRef}
			control={control}
			sendFormData={sendFormData}
			errors={errors}
			Controller={Controller}
			handleSubmit={handleSubmit}
		/>
	);
}
