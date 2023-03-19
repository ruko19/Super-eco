import React from 'react';
import { useAlianzas } from '../../../hooks/useAlianzas';


const AlianzasAdmin = () => {
    const { alianzas } = useAlianzas()
    console.log(alianzas);

    return (
        <div className='p-12'>AlianzasAdmin</div>
    )
}

export default AlianzasAdmin