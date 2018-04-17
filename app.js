

const axios = require('axios')

const argv = require('yargs').options({
    direccion: {
        alias: "d",
        desc : 'Dirección de la ciudad  para obtener el clima',
        demand: true
    }
}).argv

console.log(argv.direccion)

let url = encodeURI(argv.direccion)

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ url }&key=AIzaSyBCQeTUv19prrmW4LlElb_wf9C1UNN92c0`)
    .then( resp => {

        let location = resp.data.results[0]
        let coors = location.geometry.location

        console.log('Dirección: ',location.formatted_address)
        console.log('Latitud: ',coors.lat)
        console.log('Longitud : ',coors.lng)
    })
    .catch( e => console.log('ERROR!!', e) )