const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountries();
const displayCountry = countres => {
    const countrySec = document.getElementById('countries-container');
    countres.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h2>Country Name: ${country.name}</h2>
        <p>Capital: ${country.capital} </p>
        <p>Region: ${country.region} </p>
        <p>Demonym: ${country.demonym} </p>
        
        `;
        countrySec.appendChild(countryDiv);
        console.log(country);
    })
}