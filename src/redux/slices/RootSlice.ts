import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        location: "Location",
        category: "Category",
        notes: "Notes,",
        id: "ID,"
    },
    reducers: {
        // This sets the input from the form to the state.make
        chooseName: (state, action) => { state.name = action.payload },
        chooseLocation: (state, action) => { state.location = action.payload },
        chooseCategory: (state, action) => { state.category = action.payload },
        chooseNotes: (state, action) => { state.notes = action.payload },
        chooseID: (state, action) => { state.id = action.payload },
        
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseCategory, chooseLocation, chooseNotes, chooseID } = rootSlice.actions