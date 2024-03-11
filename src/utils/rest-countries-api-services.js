const API_ENDPOINT = new URL('https://restcountries.com/v3.1/all');
// API_ENDPOINT.pathname = 
// API_ENDPOINT.searchParams.append('fields', 'name, region, subregion, capital, tld, currencies, languages, borders, flags')
export async function fetchCountries() {
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