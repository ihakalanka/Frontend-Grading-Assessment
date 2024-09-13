import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onToggle, onDelete }) => {
    return (
        <ul className="bg-white shadow-md rounded-md divide-y divide-gray-200">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoList;