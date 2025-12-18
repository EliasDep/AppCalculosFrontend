const Step6 = ({ data, onChange }) => {

    return (
        
        <div className='flex flex-col gap-4'>

            <label className='text-sm font-medium text-[var(--balck)]'>
                Seccion de calbe (mm²)
            </label>
            <input
                name='seccionCableMm'
                placeholder='Sección de cable (mm²)'
                value={data.seccionCableMm || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Caída de tensión (%)
            </label>
            <input
                name='caidaTensionPorcentaje'
                placeholder='Caída de tensión (%)'
                value={data.caidaTensionPorcentaje || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Protecciones utilizadas
            </label>
            <input
                name='tipoProtecciones'
                placeholder='Protecciones utilizadas'
                value={data.tipoProtecciones || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />
            
        </div>

    )

}

export default Step6
