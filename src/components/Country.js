const Country = ({ country }) => {
    if (country === '') {
      return null
    }
  
    if (country === null) {
      return (
        <div>
          not found...
        </div>
      )
    }

    return (
      <div>
        <h3>{country.name.common} </h3>
        <div>capital: {country.capital} </div>
        <div>population: {country.population}</div> 
        <div alt={`flag of ${country.name.common}`} >{country.flag}</div>
      </div>
    )
}

export default Country