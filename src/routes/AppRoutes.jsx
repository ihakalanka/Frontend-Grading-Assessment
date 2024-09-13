import { useRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Layout from '../routes/Layout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TodoPage from '../pages/TodoPage';
import TodoCreatePage from '../pages/TodoCreatePage';
import TodoEditPage from '../pages/TodoEditPage';
import { useSelector } from 'react-redux';
import { ROUTE_PATH } from './routePaths';
import RegisterPage from '../pages/RegisterPage';

const AppRoutes = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const elements = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: (
                        <ProtectedRoute isAuthenticated={isAuthenticated} redirectUrl={ROUTE_PATH.LOGIN}>
                            <HomePage />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: ROUTE_PATH.LOGIN,
                    element: <LoginPage />,
                },
                {
                    path: ROUTE_PATH.REGISTER,
                    element: <RegisterPage />,
                },
                {
                    path: ROUTE_PATH.TODO_CREATE,
                    element: (
                        <ProtectedRoute isAuthenticated={isAuthenticated} redirectUrl={ROUTE_PATH.LOGIN}>
                            <TodoCreatePage />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: ROUTE_PATH.TODO,
                    element: (
                        <ProtectedRoute isAuthenticated={isAuthenticated} redirectUrl={ROUTE_PATH.LOGIN}>
                            <TodoPage />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: ROUTE_PATH.TODO_EDIT,
                    element: (
                        <ProtectedRoute isAuthenticated={isAuthenticated} redirectUrl={ROUTE_PATH.LOGIN}>
                            <TodoEditPage />
                        </ProtectedRoute>
                    ),
                },
            ],
        },
        {
            path: '*',
            element: <h1>404 Not Found</h1>,
        },
    ]);    

    return elements;
};

export default AppRoutes;