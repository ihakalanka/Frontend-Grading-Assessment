import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { TextArea } from '../components/TextArea';
import { TextInput } from '../components/TextInput';
import useForm from '../hooks/useForm';
import { addTodo } from '../features/todos/todosSlice';
import * as Yup from 'yup';

const TodoCreatePage = () => {
    const navigate = useNavigate();

    const formik = useForm({
        initialValues: {
            title: '',
            description: '',
            completed: false,
        },
        validationSchema: {
            title: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
        },
        onSubmit: (values, dispatch) => {
            dispatch(addTodo({
                id: Date.now(),
                ...values,
                completed: false,
            }));
            navigate('/todos');
        },
    });

    return (
        <div className="flex items-center justify-center py-24">
            <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-lg rounded-md">
                <h1 className="text-2xl font-bold text-center text-gray-800">Create Todo</h1>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <TextInput label="Title" name="title" formik={formik} />
                    <TextArea label="Description" name="description" formik={formik} />
                    <Button label="Create Todo" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                </form>
            </div>
        </div>
    );
};

export default TodoCreatePage;