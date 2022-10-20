import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userType {
    email: string,
    userName: string,
    address?: string,
}

const initialState = {
    value: {} as userType
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action: PayloadAction<userType>) => {
            state.value = action.payload
        },
        removeUser: (state) => {
            state.value = {} as userType
        }
    }
})

export const { createUser, removeUser } = userSlice.actions;
export default userSlice.reducer;