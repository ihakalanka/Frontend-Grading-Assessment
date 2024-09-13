import PropTypes from 'prop-types';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, fields, formik, submitButtonLabel, linkTo, linkLabel }) => (
    <div className="flex items-center justify-center py-20">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-lg p-8 space-y-6 bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
            {fields.map(({ name, label, type }) => (
                <TextInput
                    key={name}
                    label={label}
                    name={name}
                    formik={formik}
                    type={type}
                />
            ))}
            <Button
                label={submitButtonLabel}
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
            {linkTo && linkLabel && (
                <p className="text-sm text-center text-gray-500">
                    {linkLabel} <Link to={linkTo} className="text-indigo-600 hover:text-indigo-400">Register</Link>
                </p>
            )}
        </form>
    </div>
);

AuthForm.propTypes = {
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string,
        })
    ).isRequired,
    formik: PropTypes.object.isRequired,
    submitButtonLabel: PropTypes.string.isRequired,
    linkTo: PropTypes.string,
    linkLabel: PropTypes.string,
};

export default AuthForm;