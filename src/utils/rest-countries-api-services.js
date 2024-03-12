const BASE_URL = 'https://restcountries.com/v3.1';
// API_ENDPOINT.searchParams.append('fields', 'name, region, subregion, capital, tld, currencies, languages, borders, flags')
export async function fetchCountries() {
    const API_ENDPOINT = new URL(BASE_URL);
    API_ENDPOINT.pathname += '/all'
    try {
        const response = await fetch(API_ENDPOINT.href);
        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return []; // Return an empty array or handle the error appropriately
    }
}

export async function getCountryNameByCode(code) {
    const API_ENDPOINT = new URL(BASE_URL);
    API_ENDPOINT.pathname += '/alpha'
    API_ENDPOINT.searchParams.append('codes', code)
    try {
        const response = await fetch(API_ENDPOINT.href);
        if (!response.ok) {
            throw new Error('Failed to fetch country');
        }
        const data = await response.json();
        return data[0].name.common;
    } catch (error) {
        console.error('Error fetching country', error);
        return []; // Return an empty array or handle the error appropriately
    }
}