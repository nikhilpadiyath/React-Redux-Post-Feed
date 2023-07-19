import { createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id:'0', name: 'Nikhil Padiyath'},
    {id:'1', name: 'Ishan Padiyath'},
    {id:'2', name: 'Nihan Padiyath'}
];

const usersSlice= createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer;