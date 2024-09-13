import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const useForm = ({ initialValues, validationSchema, onSubmit }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object(validationSchema),
        onSubmit: (values) => {
            onSubmit(values, dispatch, navigate);
        },
    });

    return formik;
};

export default useForm;