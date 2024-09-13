import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <li className="p-4 border-b border-gray-200 transition hover:bg-gray-50">
            <div className="flex justify-between items-center">
                <div className="flex-grow">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                            className="mr-3 focus:ring-indigo-500 text-indigo-600 rounded-full w-5 h-5 transition"
                        />
                        <span
                            className={`text-lg font-semibold cursor-pointer transition-colors ${
                                todo.completed
                                    ? 'line-through text-gray-400'
                                    : 'text-gray-900 hover:text-indigo-600'
                            }`}
                        >
                            {todo.title}
                        </span>
                    </div>
                    <p className="ml-8 mt-1 text-sm text-gray-600">
                        {todo.description}
                    </p>
                    <p className={`ml-8 mt-1 text-sm font-medium transition ${
                        todo.completed ? 'text-green-500' : 'text-red-500'
                    }`}>
                        {todo.completed ? 'Completed' : 'Not Completed'}
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <Link
                        to={`/todos/edit/${todo.id}`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md shadow-sm transition"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={() => onDelete(todo.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-sm transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoItem;