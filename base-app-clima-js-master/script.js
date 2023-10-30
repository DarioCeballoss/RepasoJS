let api_key = '798d3e4baccec788e94d6e3341e7d20c'
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15
//let ciudad = 'london'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){ fetchDatosClima(ciudad)}
})

function fetchDatosClima(ciudad){
    fetch (`${urlBase}?q=${ciudad}&APPID=${api_key}`)
    .then(data =>data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const icono = data.weather[0].icon
    const descripcion = data.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre} `

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La teperatura es : ${Math.floor(temperatura-difKelvin)}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es : ${humedad} %`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es : ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}
