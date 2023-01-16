const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');


const apiKey="b/dK5KH8uf7T0v1LD2QWFQ==ByY9Yecmo7dWq3bn";
const option ={
    method:'GET',
    headers: { 'X-Api-Key':apiKey},
};
const apiURL ='https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function getJoke(){
    const response = await fetch(apiURL, option);
    const data = await response.json();
    //console.log(data[0].joke);
    jokeEl.innerText = data[0].joke;
 };

btnEl.addEventListener("click",getJoke)




// we can user API Ninjas (DAD Jokes ApI Directory) for random joke generator