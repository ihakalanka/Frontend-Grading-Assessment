import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useState } from 'react';
import { Button } from '../components/Button';
import { FaHome, FaTasks, FaPlus, FaSignOutAlt } from 'react-icons/fa'; // Imported icons

const Layout = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
    };

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <div className="bg-gray-100 flex flex-col min-h-screen">
            <header>
                <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
                    {isAuthenticated ? (
                        <>
                            <div className="flex items-center">
                                <button className="lg:hidden mr-4" onClick={toggleMenu}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                </button>

                                <h1 className="text-2xl font-bold mr-10">Todo App</h1>

                                <div className="hidden lg:flex space-x-4">
                                    <Link to="/" className="flex items-center space-x-2 rounded-md hover:bg-blue-500 focus:outline-none px-4 py-2 delay-100 transition-all ease-in-out">
                                        <FaHome className="w-5 h-5" />
                                        <span>Home</span>
                                    </Link>
                                    <Link to="/todos" className="flex items-center space-x-2 rounded-md hover:bg-blue-500 focus:outline-none px-4 py-2 delay-100 transition-all ease-in-out">
                                        <FaTasks className="w-5 h-5" />
                                        <span>Todos</span>
                                    </Link>
                                    <Link to="/create" className="flex items-center space-x-2 rounded-md hover:bg-blue-500 focus:outline-none px-4 py-2 delay-100 transition-all ease-in-out">
                                        <FaPlus className="w-5 h-5" />
                                        <span>Create</span>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <Button
                                    label={<><FaSignOutAlt className="w-5 h-5 inline mr-2" />Logout</>}
                                    onClick={handleLogout}
                                    className="bg-red-500 px-3 py-1 rounded flex items-center"
                                />
                            </div>
                        </>
                    ) : (
                        <h1 className="text-2xl font-bold">My Todo App</h1>
                    )}
                </nav>
            </header>

            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-blue-700 bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-4 p-4">
                    <Link to="/" className="text-white text-lg font-semibold flex items-center space-x-2" onClick={toggleMenu}>
                        <FaHome />
                        <span>Home</span>
                    </Link>
                    <Link to="/todos" className="text-white text-lg font-semibold flex items-center space-x-2" onClick={toggleMenu}>
                        <FaTasks />
                        <span>Todos</span>
                    </Link>
                    <Link to="/create" className="text-white text-lg font-semibold flex items-center space-x-2" onClick={toggleMenu}>
                        <FaPlus />
                        <span>Create</span>
                    </Link>
                    <button onClick={toggleMenu} className="mt-6 text-white underline">Close Menu</button>
                </div>
            )}

            <main className="p-1 flex-grow">
                <Outlet />
            </main>

            <footer className="bg-blue-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold mb-4">Todo App</h1>

                        <div className="text-center text-sm text-gray-300">
                            <p>© 2024 Todo App. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;