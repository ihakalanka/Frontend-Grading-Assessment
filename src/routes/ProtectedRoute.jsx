import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isAuthenticated, children, redirectUrl }) => {
    if (!isAuthenticated) {
        return <Navigate to={redirectUrl} />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    redirectUrl: PropTypes.string.isRequired,
};

export default ProtectedRoute;