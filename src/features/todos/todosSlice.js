import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, title, description, completed } = action.payload;
            const todo = state.items.find((todo) => todo.id === id);
            if (todo) {
                todo.title = title;
                todo.description = description;
                todo.completed = completed;
            }
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;