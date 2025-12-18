import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext.jsx'
import Login from '../pages/Login.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Docs from '../pages/Docs.jsx'
import ClientPage from '../pages/ClientPage.jsx'
import StepPage from '../pages/StepPage.jsx'


const AppRoutes = () => {

    const { token } = useContext(AuthContext)

    return (

        <Routes>

            <Route path='/' element={token ? <Navigate to='/dashboard' /> : <Login />} />
            <Route path='/dashboard' element={token ? <Dashboard /> : <Navigate to='/' />} />
            <Route path='/docs' element={token ? <Docs /> : <Navigate to='/' />} />
            <Route path='/clients/:id' element={token ? <ClientPage /> : <Navigate to='/' />} />
            <Route path='/clients/:id/step/:num' element={token ? <StepPage /> : <Navigate to='/' />} />

        </Routes>

    )
    
}

export default AppRoutes
