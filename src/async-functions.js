const fetch = require('node-fetch'); // import native fetch

async function getTatooineResidents() {
    try {
        const response = await fetch('https://swapi.co/api/planets/1/');
        // console.log(response);
        const planetTatooine = await response.json()
        // console.log(planetTatooine);
        const planetTatooineResidents = await planetTatooine.residents
        // console.log(planetTatooineResidents);
        return planetTatooineResidents
    } catch (err) {
        console.log('fetch failed', err);
    }
}

module.exports = {
    getTatooineResidents
}