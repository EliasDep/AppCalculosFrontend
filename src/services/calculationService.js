const API = 'http://localhost:8080/api/calculations'

const getToken = () => localStorage.getItem ('token')


export const getStep = async (clientId, step) => {

    const res = await fetch (`${API}/${clientId}/step/${step}`, {

        headers: {
            Authorization: `Bearer ${getToken()}`
        }

    })

    if (!res.ok) throw new Error ('Error al obtener el paso')
    return res.json()

}


export const saveStep = async (clientId, step, payload) => {

    const res = await fetch (`${API}/${clientId}/step/${step}`, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(payload)

    })

    if (!res.ok) throw new Error ('Error al guardar el paso')
    return res.json()

}
