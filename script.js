const contEl = document.querySelector("#container")
const UserEl = document.querySelector("#user")

addEventListener('click', function() {
    let username = UserEl.value
    let url = `https://api.github.com/users/jishnu-prasad-s`
    contEl.classList.remove("invisible")
    fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
        /*.then(function(response) {
            if (response.status !== 200) {
                console.log(`Error: ${response.status}`)
                return
            }
        })*/

        .then(data => {
            console.log(data)
        })
    
        .catch(function(error) {
            console.log(`Error : ${error}`)
        });

    contEl.classList.add("visible")
})