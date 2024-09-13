import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import AuthForm from '../components/AuthForm';
import * as Yup from 'yup';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerData = useSelector((state) => state.register);
    const users = registerData?.users || [];

    const formik = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: {
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        },
        onSubmit: (values) => {
            const user = users.find(user => user.email === values.email && user.password === values.password);
            if (user) {
                dispatch(login(values));
                navigate('/');
            } else {
                alert('Invalid email or password');
            }
        },
    });

    const fields = [
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
    ];

    return (
        <AuthForm
            title="Login"
            fields={fields}
            formik={formik}
            submitButtonLabel="Login"
            linkTo="/register"
            linkLabel="Don't have an account?"
        />
    );
};

export default LoginPage;