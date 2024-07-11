var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var sun = document.querySelector('.sun span');
var wind = document.querySelector('.wind span');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changeWeatherUI(input) {//async để khải báo hàm bất đồng bộ hàm tự động trả về promise
    let capitalValue = 'Ha Noi';
    if(input) {
        capitalValue = input.trim();
    }
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    //await làm tạm dừng việc thực hiện của hàm async cho đến khi promise được giải quyết
    let data = await fetch(apiURL).then(res => res.json());
    
    if(data.cod === 200) {
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        value.innerText = Math.round(data.main.temp) + '°C';
        let temp = data.main.temp;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
        time.innerText = new Date().toLocaleString('vi');
        content.classList.remove('hide');

        body.setAttribute('class', 'warm');
        if(temp <= 25) {
            body.setAttribute('class', 'cool');
        }
        if(temp <= 22) {
            body.setAttribute('class', 'warm');
        }
        if(temp <= 19) {
            body.setAttribute('class', 'cold');
        }
        if(temp > 25) {
            body.setAttribute('class', 'hot');
        }

    } else {
        console.log('not found');
        content.classList.add('hide')
    }
       
}

changeWeatherUI();
search.addEventListener('keypress', function(e) {
    if(e.code === 'Enter') {
        changeWeatherUI(e.target.value);
    }
})
