const API = 'http://localhost:8080/api/clients'

const getToken = () => localStorage.getItem ('token')


export const listClients = async () => {

    const res = await fetch (API, {

        headers: {
            Authorization: `Bearer ${getToken()}`
        }

    })

    if (!res.ok) throw new Error ('Error al obtener clientes')
    return res.json()

}


export const createClient = async payload => {

    const res = await fetch (API, {

        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify (payload)

    })
    
    if (!res.ok) {

        const err = await res.json()
        throw new Error (err.message || 'Error al crear cliente')

    }

    return res.json()

}


export const getClient = async id => {

    const res = await fetch (`${API}/${id}`, {

        headers: {
            Authorization: `Bearer ${getToken()}`
        }

    })

    if (!res.ok) throw new Error ('Cliente no encontrado')
    return res.json()

}
