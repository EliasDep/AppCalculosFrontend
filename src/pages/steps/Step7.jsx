const Step7 = ({ data, onChange }) => {

    return (

        <div className='flex flex-col gap-4'>

            <label className='text-sm font-medium text-[var(--balck)]'>
                Inclinacion del panel (°)
            </label>
            <input
                name='inclinacionPanel'
                placeholder='Inclinación del panel (°)'
                value={data.inclinacionPanel || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Orientación
            </label>
            <input
                name='orientacion'
                placeholder='Orientación (N / S / E / O)'
                value={data.orientacion || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Carga de viento considerada
            </label>
            <input
                name='cargaViento'
                placeholder='Carga de viento considerada'
                value={data.cargaViento || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />
            
        </div>

    )
    
}

export default Step7
