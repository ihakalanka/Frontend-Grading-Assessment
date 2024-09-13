import { useSelector } from 'react-redux';

const HomePage = () => {
    const register = useSelector(state => state.register);
    const auth = useSelector(state => state.auth);

    const userEmail = auth?.user?.email;
    const users = register?.users || [];

    const user = users.find(user => user.email === userEmail);

    return (
        <div className="flex flex-col items-center justify-center py-10 px-4">
            <div className="p-6 w-full max-w-sm text-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                    Welcome, {user?.name || 'User'}!
                </h1>
            </div>
        </div>
    );
};

export default HomePage;