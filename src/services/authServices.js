const API_URL = 'http://localhost:8080/api/auth'

export const login = async password => {

    const res = await fetch (`${API_URL}/login`, {

        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify ({ password })

    })

    const data = await res.json()
    if (!res.ok) throw new Error (data.message)

    return data
    
}
