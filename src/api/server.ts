let token = 'a72eda848627909b2b0eab868a3245ebf9b97b458b20ccb0'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://tropical-acoustic-physician.glitch.me/api/itinerary`,{
            method: 'GET',
            headers: {              
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://tropical-acoustic-physician.glitch.me/api/itinerary`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async(id: string, data: any = {}) => {
        const response = await fetch(`https://tropical-acoustic-physician.glitch.me/api/itinerary/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id: string) => {
        const response = await fetch(`https://tropical-acoustic-physician.glitch.me/api/itinerary/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}