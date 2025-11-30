const button = document.getElementById("btn");

button.addEventListener('click', getJoke);

function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Programming,Christmas')
        .then(response => {
            return response.json();
        })
        .then(jokeData => {
            console.log(jokeData);
            if (jokeData.type === 'single') {
                document.getElementById("joke-text").innerHTML = `<strong>${jokeData.joke}</strong>`;
            } else {
                document.getElementById("joke-text").innerHTML = `<strong>${jokeData.setup}</strong><br>${jokeData.delivery}`;
            }
        })
        .catch(error => {
            console.log('Error fetching joke:', error);
            document.getElementById("joke-text").innerHTML = '<strong>Sorry, couldn\'t fetch a joke right now.</strong>';
        });
}
