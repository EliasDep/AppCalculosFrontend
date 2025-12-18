import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { getClient } from '../services/clientService.js'


const STEPS = [

    { id: 1, title: 'Cálculos de consumo del cliente' },
    { id: 2, title: 'Cálculos del generador solar (paneles)' },
    { id: 3, title: 'Cálculos para batería' },
    { id: 4, title: 'Cálculos del regulador de carga' },
    { id: 5, title: 'Cálculo del inversor' },
    { id: 6, title: 'Cálculos eléctricos obligatorios' },
    { id: 7, title: 'Cálculos de estructura y montaje' },
    { id: 8, title: 'Cálculo de materiales totales' }

]


const ClientPage = () => {

    const navigate = useNavigate()

    const { id } = useParams()
    const [client, setClient] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect (() => {

        const load = async () => {

            try {
                setLoading(true)

                const data = await getClient(id)
                setClient(data)

            } catch (err) {

                setError(err.message)

            } finally {

                setLoading(false)

            }

        }

        load()

    }, [id])

    if (loading) return <p>Cargando cliente...</p>
    if (error) return <p className='text-red-600'>{error}</p>
    if (!client) return <p>Cliente no encontrado</p>


    return (

        <div className='p-10 max-w'>

            <div className='flex items-center justify-between mb-6'>
                <div>
                    <h1 className='text-2xl font-bold'>{client.name}</h1>
                    {client.company && <p className='text-sm text-[var(--grey)]'>{client.company}</p>}
                </div>

                <button
                    onClick={() => navigate(-1)}
                    className='flex items-center bg-[var(--green)] text-[var(--white)] px-4 py-2 rounded-md font-medium hover:bg-[var(--hovergreen)] transition-all'
                >
                    Volver
                </button>
            </div>

            <ul className='space-y-3'>
                {STEPS.map(step => (

                <li key={step.id} className='flex items-center justify-between p-4 border rounded bg-[var(--white)]'>

                    <div>
                        <p className='font-medium'>{step.id}. {step.title}</p>
                    </div>

                    <Link to={`/clients/${id}/step/${step.id}`} className='text-[var(--grey)] hover:text-[var(--black)] text-lg'>
                        <FaArrowRight />
                    </Link>

                </li>

                ))}
            </ul>

        </div>

    )

}

export default ClientPage
