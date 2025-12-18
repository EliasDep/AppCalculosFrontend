import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getStep, saveStep } from '../services/calculationService.js'

import Step1 from './steps/Step1.jsx'
import Step2 from './steps/Step2.jsx'
import Step3 from './steps/Step3.jsx'
import Step4 from './steps/Step4.jsx'
import Step5 from './steps/Step5.jsx'
import Step6 from './steps/Step6.jsx'
import Step7 from './steps/Step7.jsx'
import Step8 from './steps/Step8.jsx'


const STEP_TITLES = {

    1: 'Cálculos de consumo del cliente',
    2: 'Cálculos del generador solar (los paneles)',
    3: 'Cálculos para batería',
    4: 'Cálculos del regulador de carga',
    5: 'Cálculo del inversor',
    6: 'Cálculos eléctricos obligatorios',
    7: 'Cálculos de estructura y montaje',
    8: 'Cálculo de materiales totales'

}


const StepPage = () => {

    const { id, num } = useParams()
    const navigate = useNavigate()

    const stepKey = `step${num}`

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect (() => {

        const load = async () => {

            try {

                const saved = await getStep(id, stepKey)
                setData(saved || {})

            } catch (err) {

                setError(err.message)

            } finally {

                setLoading(false)

            }

        }

        load()

    }, [id, stepKey])

    const handleChange = e => {
        setData ({ ...data, [e.target.name]: e.target.value })
    }

    const handleSave = async () => {

        await saveStep (id, stepKey, data)
        navigate(-1)

    }

    const renderStep = () => {

        if (num === '1') return <Step1 data={data} onChange={handleChange} />
        if (num === '2') return <Step2 data={data} onChange={handleChange} />
        if (num === '3') return <Step3 data={data} onChange={handleChange} />
        if (num === '4') return <Step4 data={data} onChange={handleChange} />
        if (num === '5') return <Step5 data={data} onChange={handleChange} />
        if (num === '6') return <Step6 data={data} onChange={handleChange} />
        if (num === '7') return <Step7 data={data} onChange={handleChange} />
        if (num === '8') return <Step8 data={data} onChange={handleChange} />

    }

    if (loading) return <p>Cargando...</p>
    if (error) return <p className='text-red-600'>{error}</p>


    return (

        <div className='p-10 max-w-3xl mx-auto'>

            <h1 className='text-2xl font-bold mb-2'>
                Paso {num}
            </h1>

            <h2 className='text-xl mb-6'>
                {STEP_TITLES[num]}
            </h2>

            <div className='p-6 border rounded bg-[var(--white)] shadow flex flex-col gap-6'>

                {renderStep()}

                <div className='flex justify-end gap-3'>
                    <button
                        onClick={() => navigate(-1)}
                        className='px-4 py-2 border rounded'
                    >
                        Volver
                    </button>

                    <button
                        onClick={handleSave}
                        className='px-4 py-2 bg-[var(--green)] text-white rounded hover:bg-[var(--hovergreen)]'
                    >
                        Guardar
                    </button>
                </div>

            </div>

        </div>

    )

}

export default StepPage
