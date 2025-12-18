import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { listClients } from '../services/clientService.js'
import AddClientModal from '../components/AddClientModal.jsx'


const Dashboard = () => {

    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)
    const [error, setError] = useState('')

    const fetchClients = async () => {

        try {

            setLoading(true)

            const data = await listClients()
            setClients(data)

        } catch (err) {

            setError(err.message)

        } finally {

            setLoading(false)

        }

    }

    useEffect (() => {
        fetchClients()
    }, [])

    const handleSaved = client => {
        setClients(prev => [client, ...prev])
    }


    return (

        <div className='p-10 max-w'>

            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-3xl font-bold'>Clientes</h1>

                <button onClick={() => setOpen(true)} className='px-4 py-2 rounded bg-[var(--green)] text-[var(--white)] hover:bg-[var(--hovergreen)]'>
                    + Agregar cliente
                </button>
            </div>

            {loading && <p>Cargando...</p>}
            {error && <p className='text-red-600'>{error}</p>}

            <ul className='space-y-3'>
                {clients.map(c => (

                    <li key={c._id} className='flex items-center justify-between p-4 border rounded bg-[var(--white)]'>

                        <div>
                            <p className='font-medium'>{c.name}</p>
                            {c.company && <p className='text-sm text-[var(--grey)]'>{c.company}</p>}
                        </div>

                        <Link to={`/clients/${c._id}`} className='text-[var(--grey)] hover:text-[var(--black)] text-xl'>
                            <FaArrowRight />
                        </Link>

                    </li>

                ))}
            </ul>

            <AddClientModal isOpen={open} onClose={() => setOpen(false)} onSaved={handleSaved} />

        </div>

    )

}

export default Dashboard
