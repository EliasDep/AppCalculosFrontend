const Step4 = ({ data, onChange }) => {

    return (

        <div className='flex flex-col gap-4'>

            <label className='text-sm font-medium text-[var(--balck)]'>
                Corriente del arreglo (A)
            </label>
            <input
                name='corrienteArregloA'
                placeholder='Corriente del arreglo (A)'
                value={data.corrienteArregloA || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Factor de seguridad
            </label>
            <input
                name='factorSeguridad'
                placeholder='Factor de seguridad (ej: 1.25)'
                value={data.factorSeguridad || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Tipo de regulador (MPPT / PWM)
            </label>
            <input
                name='tipoRegulador'
                placeholder='Tipo de regulador (MPPT / PWM)'
                value={data.tipoRegulador || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />
            
        </div>
        
    )

}

export default Step4
