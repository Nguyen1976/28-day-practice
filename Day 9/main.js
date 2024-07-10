var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var sun = document.querySelector('.sun span');
var wind = document.querySelector('.wind span');

async function changeWeatherUI() {//async để khải báo hàm bất đồng bộ hàm tự động trả về promise
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=455331fd5108483c69ea1bb886db7ba4`;
    //await làm tạm dừng việc thực hiện của hàm async cho đến khi promise được giải quyết
    let data = await fetch(apiURL).then(res => res.json());
    console.log(data);
       
}

changeWeatherUI();