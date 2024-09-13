import PropTypes from 'prop-types';

export const Button = ({ label, type = 'submit', className, onClick }) => (
    <button
        type={type}
        className={className}
        onClick={onClick}
    >
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}