const api = 'https://jsonplaceholder.typicode.com/todos/1';

function fetchDataFromAPI(api) {
    return fetch(api)
        .then(response => {
            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
                return null;
            }
            return response.json();
        })
        .then(data =>{
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return null;
        });
}

fetchDataFromAPI(api);