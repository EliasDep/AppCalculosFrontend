import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext.jsx'
import { login as loginService } from '../services/authServices.js'


const Login = () => {

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async e => {

        e.preventDefault()
        setError('')

        try {

            const data = await loginService (password)
            login (data.token)
            navigate ('/dashboard')

        } catch (err) {

            setError (err.message)

        }

    }


    return (

        <div className='h-full flex items-center justify-center bg-[var(--white)]'>

            <div className='p-8 rounded-xl w-full max-w-sm shadow-md bg-[var(--white)] text-[var(--black)]'>

                <h1 className='text-2xl font-semibold text-center mb-6'>
                    Ingresar
                </h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Contraseña'
                        className='w-full p-3 rounded-md border border-[var(--grey)] bg-[var(--white)] text-[var(--black)] focus:outline-none focus:ring-2 focus:ring-[var(--green)]'
                    />

                    <button
                        type='submit'
                        className='w-full p-3 rounded-md bg-[var(--green)] text-[var(--white)] font-medium transition-all hover:bg-[var(--hovergreen)]'
                    >
                        Entrar
                    </button>
                </form>

                {error && (
                    <p className='mt-4 text-center text-red-600 text-sm'>
                        {error}
                    </p>
                )}

            </div>
            
        </div>

    )

}

export default Login
