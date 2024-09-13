import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { TextArea } from '../components/TextArea';
import { TextInput } from '../components/TextInput';
import useForm from '../hooks/useForm';
import { updateTodo } from '../features/todos/todosSlice';

const TodoEditPage = () => {
    const { id } = useParams();
    const todo = useSelector((state) => state.todos.items.find((todo) => todo.id === parseInt(id)));
    const navigate = useNavigate();

    const formik = useForm({
        initialValues: {
            title: todo?.title || '',
            description: todo?.description || '',
            completed: todo?.completed || false,
        },
        validationSchema: {
            title: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
        },
        onSubmit: (values, dispatch) => {
            dispatch(updateTodo({
                id: parseInt(id),
                ...values,
            }));
            navigate('/todos');
        },
    });

    useEffect(() => {
        if (!todo) {
            navigate('/todos');
        }
    }, [todo, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-lg rounded-md">
                <h1 className="text-2xl font-bold text-center text-gray-800">Edit Todo</h1>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <TextInput label="Title" name="title" formik={formik} />
                    <TextArea label="Description" name="description" formik={formik} />
                    <Checkbox label="Completed" name="completed" formik={formik} />
                    <Button label="Update Todo" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                </form>
            </div>
        </div>
    );
};

export default TodoEditPage;