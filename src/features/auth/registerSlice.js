import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: []
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload);
        }        
    }
});

export const { register } = registerSlice.actions;
export default registerSlice.reducer;