import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todosSlice';
import TodoList from '../components/TodoList';

const TodoPage = () => {
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();

    const handleToggle = (id) => dispatch(toggleTodo(id));
    const handleDelete = (id) => dispatch(deleteTodo(id));

    return (
        <div className="flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo List</h1>
            <div className="w-full max-w-3xl">
                <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default TodoPage;