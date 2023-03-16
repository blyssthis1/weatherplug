
let button = document.querySelector('.button')
let inputValue=document.querySelector('.inputValue')
let cityName = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');



button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=11b13d877d2e6c3c3437ff6f178906ac')

    .then(response => response.json())
    .then(data => {
        let nameValue =data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data ['weather'][0]['description'];

        tempValue= Math.round(((data.main.temp-273.15)*9/5)+32)
        
        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;

        

})

    

    .catch(err =>alert("Wrong city name!"))


})

