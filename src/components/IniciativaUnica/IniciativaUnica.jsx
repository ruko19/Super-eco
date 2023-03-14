import { useParams, useLocation } from 'react-router-dom'

const IniciativaUnica = () => {

    const { id } = useParams()
    const location = useLocation()

    const { img, titulo, description } = location.state

    return (
        <div className="container md:flex items-center gap-8">
            <div>
                <img src={img} alt="imagen iniciativa" />
            </div>
            <div>
                <h3 className="text-green-600 mt-5 text-4xl font-bold mb-6">{titulo}</h3>
                <p className="font-light">{description}</p>
            </div>
        </div>
    )
}

export default IniciativaUnica