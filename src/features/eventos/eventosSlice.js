
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../api/firebaseConfig'



const initialState = {
    eventosList: [],
}

// export const eventosSlice = createSlice({
//     name: 'eventos',
//     initialState,
//     reducers: {
//         getEventos: (state, action) => {
//             state.eventosList = action.payload
//         },

//         addEventos: (state, action) => {
//             eventosDB.add(action.payload).then((ref) => {
//                 console.log("record added", ref);

//             });

//         },

//     }

// })

// export const { getEventos, addEventos } = eventosSlice.actions
// export default eventosSlice.reducer





// Acciones para obtener la lista de tareas
export const fetchEventos = createAsyncThunk('evento/fetchEventos', async () => {
    const snapshot = await db.collection('eventos').get();
    const eventos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return eventos;
});



// // Acción para crear una tarea
// export const createTodo = createAsyncThunk('todos/createTodo', async (todo) => {
//     const docRef = await firestore.collection('todos').add(todo);
//     const doc = await docRef.get();
//     return { id: doc.id, ...doc.data() };
// });

// // Acción para actualizar una tarea
// export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo) => {
//     await firestore.collection('todos').doc(todo.id).update(todo);
//     return todo;
// });

// // Acción para eliminar una tarea
// export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
//     await db.collection('todos').doc(id).delete();
//     return id;
// });

// Slice de Redux para la lista de tareas
const eventosSlice = createSlice({
    name: 'eventos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Reducers para actualizar el estado de Redux
        builder
            .addCase(fetchEventos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEventos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.todos = action.payload;
            })
            .addCase(fetchEventos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
        // .addCase(createTodo.pending, (state) => {
        //     state.status = 'loading';
        // })
        // .addCase(createTodo.fulfilled, (state, action) => {
        //     state.status = 'succeeded';
        //     state.todos.push(action.payload);
        // })
        // .addCase(createTodo.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.error = action.error.message;
        // })
        // .addCase(updateTodo.pending, (state) => {
        //     state.status = 'loading';
        // })
        // .addCase(updateTodo.fulfilled, (state, action) => {
        //     state.status = 'succeeded';
        //     const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        //     state.todos[index] = action.payload;
        // })
        // .addCase(updateTodo.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.error = action.error.message;
        // })
        // .addCase(deleteTodo.pending, (state) => {
        //     state.status = 'loading';
        // })
        // .addCase(deleteTodo.fulfilled, (state, action) => {
        //     state.status = 'succeeded';
        //     state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        // })
        // .addCase(deleteTodo.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.error = action.error.message;
        // });
    },
});

// Selectores para acceder a la lista de tareas
export const selectTodos = (state) => state

export const { getEventos, addEventos } = eventosSlice.actions
export default eventosSlice.reducer