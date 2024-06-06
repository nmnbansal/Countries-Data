const data = require('./db.json');

function findCountriesByLanguage(langCode) {
  return data.countries.filter(country =>
    country.details.languages.includes(langCode)
  ).map(country => country.name);
}

function top5ByPopulation() {
  return data.countries.sort((a, b) => b.details.population - a.details.population)
    .slice(0, 5)
    .map(country => country.name);
}

function totalPopulation() {
  return data.countries.reduce((total, country) => total + country.details.population, 0);
}

function findCurrencyByCountry(countryName) {
  const country = data.countries.find(country => country.name === countryName);
  return country ? country.details.currency : null;
}

function listCountriesAndLanguages() {
  return data.countries.map(country => ({
    name: country.name,
    languages: country.details.languages
  }));
}

console.log(findCountriesByLanguage('English'));
console.log(top5ByPopulation());
console.log(totalPopulation());
console.log(findCurrencyByCountry('India'));
console.log(listCountriesAndLanguages());
