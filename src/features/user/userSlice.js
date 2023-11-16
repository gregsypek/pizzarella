import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firstName: '',
  lastName:'',
  email:""

}
// counterSlice.actions jest automatycznie generowane przez Redux Toolkit na podstawie definicji reducers w createSlice. 

const userSlice = createSlice({
  name: 'user',// To jest nazwa "reduktora", ale nie jest używane w reducerze ani akcjach
  initialState,
  reducers: {
    updateFirstName(state, action){
      state.firstName = action.payload;
    },
    updateLastName(state, action){
      state.lastName = action.payload;
    },
    updateEmail(state, action){
      state.lastName = action.payload;
    }
  }
})

export const {updateFirstName, updateLastName,updateEmail} = userSlice.actions;

export default userSlice.reducer;