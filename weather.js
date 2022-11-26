const API_KEY = 'ef80ae5ff07cd275020bf50d476a290d';

const countyName = document.getElementById('search-country').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=bangladesh&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => displayTempData(data));

const loadWeatherData = () => {
    const countyName = document.getElementById('search-country').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${countyName}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => displayTempData(data)); 
}

const dispalyOnElement = (id, data) => {
    document.getElementById(id).innerText = data;

}
const displayTempData = (tempdata) => {
    console.log(tempdata)
    dispalyOnElement('city', tempdata.name);
    dispalyOnElement('temp', tempdata.main.temp);
    dispalyOnElement('condition', tempdata.weather[0].main);
    const weatherImage = document.getElementById('weatherImage');
    weatherImage.setAttribute('src', `https://openweathermap.org/img/wn/${tempdata.weather[0].icon}@2x.png`)

}

