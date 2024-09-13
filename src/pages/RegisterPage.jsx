import { useDispatch, useSelector } from 'react-redux';
import { register } from '../features/auth/registerSlice';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import AuthForm from '../components/AuthForm';
import * as Yup from 'yup';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerData = useSelector((state) => state.register);
    const users = registerData?.users || [];

    const formik = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: {
            name: Yup.string().required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required')
                .matches(
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    'Email must be a valid format'
                )
                .notOneOf(
                    ['example.com', 'test.com'],
                    'Emails from example.com and test.com are not allowed'
                )
                .min(5, 'Email must be at least 5 characters')
                .max(50, 'Email cannot exceed 50 characters'),
            password: Yup.string()
                .required('Required')
                .min(8, 'Password must be at least 8 characters')
                .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                .matches(/\d/, 'Password must contain at least one number')
                .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
        },
        onSubmit: (values) => {
            const user = users.find(user => user.email === values.email);
            if (user) {
                alert('Email already exists');
            } else {
                dispatch(register(values));
                navigate('/');
            }
        },
    });

    const fields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
    ];

    return (
        <AuthForm
            title="Register"
            fields={fields}
            formik={formik}
            submitButtonLabel="Register"
        />
    );
};

export default RegisterPage;