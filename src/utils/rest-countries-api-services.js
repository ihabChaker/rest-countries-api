const BASE_URL = 'https://restcountries.com/v3.1';

async function fetchData(path, params) {
    const API_ENDPOINT = new URL(BASE_URL);
    API_ENDPOINT.pathname += path;
    Object.keys(params).forEach(key => API_ENDPOINT.searchParams.append(key, params[key]));
    try {
        console.log(API_ENDPOINT.href)
        const response = await fetch(API_ENDPOINT.href);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${path}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${path}:`, error);
        return [];
    }
}

export async function fetchCountries() {
    const fieldsList = ['name', 'region', 'subregion', 'capital', 'tld', 'currencies', 'languages', 'borders', 'flags', 'population']
    return fetchData('/all', { 'fields': fieldsList.join(',') });
}
export async function getCountriesByRegion(region) {
    const fieldsList = ['name', 'region', 'subregion', 'capital', 'tld', 'currencies', 'languages', 'borders', 'flags', 'population']
    return fetchData(`/region/${region}`, { 'fields': fieldsList.join(',') });
}
export async function getCountriesByPartialName(name) {
    const fieldsList = ['name', 'region', 'subregion', 'capital', 'tld', 'currencies', 'languages', 'borders', 'flags', 'population']
    return fetchData(`/name/${name}`, { 'fields': fieldsList.join(','), 'fullText': false });
}

export async function getCountryNameByCode(code) {
    const data = await fetchData('/alpha', { 'fields': 'name', 'codes': code });
    return data[0].name.common;
}

export async function getCountriesNamesByCodesArray(codeArray) {
    if (codeArray.length == 0) return ['There are no bordering countries']

    const data = await fetchData('/alpha', { 'codes': codeArray.join(','), 'fields': 'name' });
    return data.map(country => country.name.common);
}
