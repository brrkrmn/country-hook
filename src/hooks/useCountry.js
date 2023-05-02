import { useEffect, useState } from "react"
import axios from "axios"

const useCountry = (name) => {
    const [country, setCountry] = useState('')
  
    useEffect(() => {
        if (name !== '') {
            axios.get(`https://restcountries.com/v3.1/name/${name}`)
                .then(res => setCountry(res.data[0]))
                .catch(setCountry(null))
        }
    }, [name])

    return country
}

export default useCountry