const contEl = document.querySelector("#container");
let st = "<h1>Home</h1>";
let user = "jishnu-prasad-s"
let url = `https://api.github.com/users/${user}`;

fetch(url, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(function(response) {
        if (response.status !== 200) {
            console.log(`Error: ${response.status}`);
            return;
        }

        response.json().then(function(data){
            console.log(data);
            data = data["login"]
            contEl.innerHTML = data;
        });
    })

    .catch(function(error) {
        console.log(`Error : ${error}`);
    });