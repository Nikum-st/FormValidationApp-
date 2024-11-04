import * as yup from 'yup';

export const validationSchema = yup.object().shape({
	email: yup.string().email('Некорректный адрес электронной почты'),
	password: yup
		.string()
		.matches(
			/(?=.*\d)(?=.*[@$!%*?&])[A-Za-zА-Яа-я\d@$!%*?&]{8,}/,
			'Пароль должен содержать минимум 8 символов, хотябы одну цифру и специальный символ (@$!%*?&)',
		),
	repeatPassw: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});
