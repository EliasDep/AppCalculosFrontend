import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import AppRoutes from './routes/AppRoutes.jsx'


const App = () => {

  const Layout = ({ children }) => {

    const { pathname } = useLocation()

    const showNavbar = pathname !== '/'

    return (

      <div className='h-full flex'>
        {showNavbar && <Navbar />}

        <div className='flex-1 ml-20'> 
          {children}
        </div>
      </div>

    )

  }


  return (

    <Layout>

      <AppRoutes />

    </Layout>

  )

}

export default App
