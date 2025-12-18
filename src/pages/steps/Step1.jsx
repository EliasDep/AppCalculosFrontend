const Step1 = ({ data, onChange }) => {

    return (

        <div className='flex flex-col gap-4'>

            <label className='text-sm font-medium text-[var(--balck)]'>
                Consumo diariro (Wh)
            </label>
            <input
                name='consumoDiarioWh'
                placeholder='Consumo diario (Wh)'
                value={data.consumoDiarioWh || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Consumo mensual (kWh)
            </label>
            <input
                name='consumoMensualKwh'
                placeholder='Consumo mensual (kWh)'
                value={data.consumoMensualKwh || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Pico de potencia (W)
            </label>
            <input
                name='picoPotenciaW'
                placeholder='Pico de potencia (W)'
                value={data.picoPotenciaW || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />
            
        </div>

    )

}

export default Step1
