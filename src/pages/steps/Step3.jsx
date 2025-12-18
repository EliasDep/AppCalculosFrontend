const Step3 = ({ data, onChange }) => {

    return (

        <div className='flex flex-col gap-4'>

            <label className='text-sm font-medium text-[var(--balck)]'>
                Dias de autonomia
            </label>
            <input
                name='diasAutonomia'
                placeholder='Días de autonomía'
                value={data.diasAutonomia || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Voltaje del banco
            </label>
            <input
                name='voltajeBanco'
                placeholder='Voltaje del banco (12 / 24 / 48 V)'
                value={data.voltajeBanco || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Capacidad de batería (Ah)
            </label>
            <input
                name='capacidadBateriaAh'
                placeholder='Capacidad de batería (Ah)'
                value={data.capacidadBateriaAh || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Profundidad de descarga (DoD %)
            </label>
            <input
                name='profundidadDescarga'
                placeholder='Profundidad de descarga (DoD %)'
                value={data.profundidadDescarga || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />
            
        </div>

    )

}

export default Step3
