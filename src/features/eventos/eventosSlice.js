
import { createSlice } from '@reduxjs/toolkit'
import { db2 } from '../../api/firebaseConfig'



const initialState = {
    eventosList: [],
}

export const eventosSlice = createSlice({
    name: 'eventos',
    initialState,
    reducers: {
        getEventos: (state, action) => {
            state.eventosList = action.payload
        },

        addEventos: (state, action) => {
            eventosDB.add(action.payload).then((ref) => {
                console.log("record added", ref);

            });

        },

    }

})

export const { getEventos, addEventos } = eventosSlice.actions
export default eventosSlice.reducer
