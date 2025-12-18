const Step5 = ({ data, onChange }) => {

    return (

        <div className='flex flex-col gap-4'>

            <label className='text-sm font-medium text-[var(--balck)]'>
                Potencia nominal (W)
            </label>
            <input
                name='potenciaNominalW'
                placeholder='Potencia nominal (W)'
                value={data.potenciaNominalW || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Potencia de arranque (W)
            </label>
            <input
                name='potenciaArranqueW'
                placeholder='Potencia de arranque (W)'
                value={data.potenciaArranqueW || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Voltaje del sistema
            </label>
            <input
                name='voltajeSistema'
                placeholder='Voltaje del sistema (12 / 24 / 48 V)'
                value={data.voltajeSistema || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />
            
        </div>
        
    )
    
}

export default Step5
