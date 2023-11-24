import { countries } from "./countries.js"

const findCountry = (inputCountry) => {

    const pais = countries.find((pais) => {
       return pais.name.toLowerCase() === inputCountry.toLowerCase()
    })

    return pais 
}

console.log((findCountry(process.argv[2])));
console.table(findCountry(process.argv[2]));

