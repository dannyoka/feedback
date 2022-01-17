import countries from 'countries-list';

const countryCodes = Object.keys(countries.countries);
export const countryNames = countryCodes.map(
  (code) => countries.countries[code].name
);
