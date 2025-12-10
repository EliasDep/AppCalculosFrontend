import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaFileAlt } from 'react-icons/fa'


const Navbar = () => {

    const { pathname } = useLocation()

    const linkClass = isActive => `
        flex flex-col items-center justify-center gap-3 p-4 text-xl
        ${isActive ? 'text-[var(--black)]' : 'text-[var(--grey)]'}
        hover:text-[var(--black)] transition-colors
    `

    return (

        <nav 
            className='
                h-full w-20 bg-[var(--white)]
                border-r border-[var(--grey)]
                flex flex-col items-center justify-center py-6
                fixed left-0 top-0
            '
        >

            <Link to='/dashboard' className={linkClass(pathname === '/dashboard')}>
                <FaHome />
            </Link>

            <Link to='/docs' className={linkClass(pathname === '/docs')}>
                <FaFileAlt />
            </Link>

        </nav>

    )

}

export default Navbar
