import { useState } from 'react'
import { createClient } from '../services/clientService.js'


const AddClientModal = ({ isOpen, onClose, onSaved }) => {

    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    if (!isOpen) return null

    const handleSave = async e => {

        e.preventDefault()
        setError('')

        if (!name) { setError ('El nombre es obligatorio'); return }

        try {

            setLoading (true)

            const client = await createClient ({ name, company })

            setName('')
            setCompany('')
            onSaved(client)
            onClose()

        } catch (err) {

            setError(err.message)

        } finally {

            setLoading(false)

        }

    }


    return (

        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>

            <div className='bg-[var(--white)] text-[var(--black)] rounded-lg p-6 w-full max-w-md shadow-lg'>

                <h3 className='text-xl font-semibold mb-4'>Agregar cliente</h3>

                <form onSubmit={handleSave} className='flex flex-col gap-3'>

                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='p-2 border border-[var(--grey)] rounded'
                        placeholder='Nombre'
                    />
                    <input
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        className='p-2 border border-[var(--grey)] rounded'
                        placeholder='Empresa (opcional)'
                    />

                    {error && <p className='text-red-600 text-sm'>{error}</p>}

                    <div className='flex gap-3 justify-end mt-4'>
                        <button type='button' onClick={onClose} className='px-4 py-2 rounded border'>
                            Cancelar
                        </button>
                        <button type='submit' className='px-4 py-2 rounded bg-[var(--green)] text-[var(--white)] hover:bg-[var(--hovergreen)]' disabled={loading}>
                            {loading ? 'Guardando...' : 'Guardar'}
                        </button>
                    </div>

                </form>

            </div>

        </div>

    )
    
}

export default AddClientModal
