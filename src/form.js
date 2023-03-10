

let city = 'Columbus';

export function formBuild(){
let weatherForm = document.createElement('form');
let weatherInput = document.createElement('input');
weatherInput.id='weatherInput';
let weatherLabel = document.createElement('label');
weatherLabel.setAttribute('for','weatherInput')
weatherLabel.textContent='Which City\'s weather would you like to know?'

let weatherSubmit = document.createElement('button');
weatherSubmit.id = 'weatherSubmit';
weatherSubmit.textContent='Submit';
document.body.appendChild(weatherForm);
weatherForm.appendChild(weatherLabel)
weatherForm.appendChild(weatherInput);
weatherForm.appendChild(weatherSubmit);
weatherForm.addEventListener('click', (e)=>{
    e.preventDefault();

    if(e.target.id == 'weatherSubmit'){
    city = weatherInput.value;
       weatherInput.value='';
console.log(city);
weather()
    }
})

};



 console.log('https://api.openweathermap.org/data/2.5/weather?q=Columbus&APPID=cc0e128309547853b0d40f65e06c36d4');

 export async function weather(){
   const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cc0e128309547853b0d40f65e06c36d4&units=imperial`,{mode: 'cors'} );
   console.log(weather);
   const test = await weather.json();
      console.log(test.main.temp);
      console.log(test.main.humidity);
      console.log(test.main.temp_min);
      console.log(test.main.temp_max);
   console.log(test.weather[0].description)
   console.log(test.sys.name);
   console.log(test.sys.sunrise);
   console.log(test.sys.sunset);
   console.log(test.wind.speed);


 }