const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9f1f43ab65msh0e1bbce1a6b7922p187f10jsn96fe2e355715',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


async function qwerty() {
    try {

        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}
qwerty()