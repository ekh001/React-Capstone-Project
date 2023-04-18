import { useEffect, useState } from "react"
import { server_calls } from "../api/server"


type DestinationData = {
    name: string,
    location: string,
    category: string,
    notes: string,
    id: string,
}

export const useGetData = () => {
  const [ destinationData, setData ] = useState<DestinationData[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { destinationData, getData:handleDataFetch }
  
}
