import PropTypes from 'prop-types';

export const TextInput = ({ label, name, formik, type = 'text' }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type={type}
            name={name}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            {...formik.getFieldProps(name)}
        />
        {formik.touched[name] && formik.errors[name] ? (
            <div className="mt-1 text-sm text-red-600">{formik.errors[name]}</div>
        ) : null}
    </div>
);

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired,
    type: PropTypes.string,
};