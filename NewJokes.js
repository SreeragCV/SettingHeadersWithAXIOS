
const delayedColorChange = (color, delay) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            document.body.style.backgroundColor = color;
            resolve();
          }, delay)

    })
} 

delayedColorChange('red', 1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('green', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('violet', 1000))
.then(() => delayedColorChange('olive', 1000))
.then(() => delayedColorChange('peach', 1000))
.then(() => delayedColorChange('white', 1000))


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () =>  {
    const jokeText = await dadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const dadJoke = async () => {
    try{
        const config = { headers : { Accept: 'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
  } catch(err){
    return "NO JOKES AVAILABLE :("
  }
    
}

button.addEventListener('click', addNewJoke);