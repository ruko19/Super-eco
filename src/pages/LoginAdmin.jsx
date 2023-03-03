import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LoginAdminComponent from '../components/LoginAdmin/LoginAdminComponent'
import { getEventos } from '../features/eventos/eventosSlice'

const LoginAdmin = () => {
    // const eventosState = useSelector(state => state.eventos)
    // console.log(eventosState);
    const eventos = useSelector(state => state.eventos)

    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(getEventos)
        console.log(eventos);

    }, [])



    return (
        <div className='container'>
            <LoginAdminComponent />
        </div>
    )
}

export default LoginAdmin
