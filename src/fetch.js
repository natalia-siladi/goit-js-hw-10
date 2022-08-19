const BASE_URL = "https://restcountries.com/v3.1/"
export function fetch(name) {

    return fetch(
        `${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }

            if (response.status === 404) {
                return Promise.reject('Error 404');
            }
        })
} 