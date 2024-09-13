import PropTypes from 'prop-types';

export const Checkbox = ({ label, name, formik }) => (
    <div className="flex items-center">
        <input
            type="checkbox"
            name={name}
            className="mr-2 focus:ring-indigo-500 text-indigo-600 border-gray-300 rounded"
            {...formik.getFieldProps(name)}
            checked={formik.values[name]}
        />
        <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>
    </div>
);

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired,
}