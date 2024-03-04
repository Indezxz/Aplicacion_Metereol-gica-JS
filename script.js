let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key =  '605507acf87117e111e54a3ab5238541';
let api_key2 = '18c86db5f9c0c030b9df5f9e5b36c045';

document.getElementById('botonBusqueda').addEventListener('click',() => {

    const ciudad = document.getElementById("ciudadEntrada").value;
    if(ciudad) {
    fetchDatosClima(ciudad);
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key2}`)
    .then(data => data.json())
    .then(data => mostrarDatos(data));   
}

function mostrarDatos(data) {
    console.log(data);
    // Seleccionar DIV y limpiarlo
    const divDatosClima = document.getElementById("datosClima");
    divDatosClima.innerHTML="";

    // Constantes traidas del fetch
    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    const humedad = data.main.humidity;
    const icono = data.weather[0].icon;

    // Craer etiquetas y agregarlos al div = 'datosClima'
    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`
    
    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.round(temperatura-273.15)} °C`

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${humedad} %`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion metereológica es: ${descripcion}`;
    

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripcionInfo);
}



 