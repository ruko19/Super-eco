
import { createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../api/firebaseConfig'


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

    }

})


export const { getEventos } = eventosSlice.actions
export default eventosSlice.reducer




export const fetchEventos = () => async (dispatch) => {
    const snapshot = await getDocs(collection(db, "eventos"));
    const data = [];

    snapshot.forEach(doc => {
        const evento = doc.data()
        data.push({ ...evento })
    })


    dispatch(getEventos(data))

}