async function fetchJoke() {
    const language = document.getElementById("language").value;
    let apiUrl = "";
    if (language === "english") {
        apiUrl = 'https://official-joke-api.appspot.com/jokes/random';
    } else {
        apiUrl = 'https://hindi-jokes-api.vercel.app/jokes?category=random';
    }
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        let jokeText = language === "english" ? `${data.setup} \n ${data.punchline}` : data.joke;
        document.getElementById('joke').innerText = jokeText;
    } catch (error) {
        document.getElementById('joke').innerText = "Failed to load joke!";
    }
}
