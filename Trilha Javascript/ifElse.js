//if.... else

let temperature = 36.5

if(temperature >= 37) {
  console.log('Febre')
} else {
  console.log('Saudável')
}


let temperatureNow = 38
let highTemperatureNow = temperatureNow >= 37.5
let mediumTemperatureNow = temperatureNow <= 37.5 && temperatureNow >= 37

if(highTemperatureNow) {
  console.log('Febre Alta')
} else if(mediumTemperatureNow) {
  console.log('Febre moderada')
} else {
  console.log('Saudável sem sintomas de febre')
}
