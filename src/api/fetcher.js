const BASE_URL_JSON_PLACE_HOLDER = "https://jsonplaceholder.typicode.com";

export const fetchData = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        const error = new Error(`Request failed: ${res.status}`);
        error.status = res.status;
        throw error;
    }
    return res.json();
}


export const apiFetcherForJSONPlaceholder = (path) => fetchData(`${BASE_URL_JSON_PLACE_HOLDER}${path}`);