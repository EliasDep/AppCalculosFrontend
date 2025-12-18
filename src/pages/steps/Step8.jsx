const Step8 = ({ data, onChange }) => {

    return (

        <div className='flex flex-col gap-4'>

            <label className='text-sm font-medium text-[var(--balck)]'>
                Listado de materiales
            </label>
            <textarea
                name='listaMateriales'
                placeholder='Listado de materiales'
                value={data.listaMateriales || ''}
                onChange={onChange}
                className='border p-3 rounded-md min-h-[120px]'
            />

            <label className='text-sm font-medium text-[var(--balck)]'>
                Metros totales de cable
            </label>
            <input
                name='metrosCable'
                placeholder='Metros totales de cable'
                value={data.metrosCable || ''}
                onChange={onChange}
                className='border p-3 rounded-md'
            />
            
        </div>

    )

}

export default Step8
