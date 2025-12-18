const Step2 = ({ data, onChange }) => {

    return (
        
        <div className='flex flex-col gap-4'>

            <label className='text-sm font-medium text-[var(--balck)]'>
                Potencia de cada panel (W)
            </label>
            <input
                name='potenciaPanelW'
                placeholder='Potencia de cada panel (W)'
                value={data.potenciaPanelW || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--black)]'>
                Horas pico solares (HSP)
            </label>
            <input
                name='horasPicoSolares'
                placeholder='Horas pico solares (HSP)'
                value={data.horasPicoSolares || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--black)]'>
                Cantidad de paneles
            </label>
            <input
                name='cantidadPaneles'
                placeholder='Cantidad de paneles'
                value={data.cantidadPaneles || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

            <label className='text-sm font-medium text-[var(--black)]'>
                Pérdidas estimadas (%)
            </label>
            <input
                name='perdidasPorcentaje'
                placeholder='Pérdidas estimadas (%)'
                value={data.perdidasPorcentaje || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />

        </div>

    )

}

export default Step2
