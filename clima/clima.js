

const axios = require('axios')


const getClima = async ( lat, lng ) => {
    let clima = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=0ccadb2e43818472641a7b6faef6187a`)

    return clima.data.main.temp

}

module.exports = {
    getClima
}
