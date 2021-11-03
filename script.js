const contEl = document.querySelector("#container")
const UserEl = document.querySelector("#user")
const SearchBtn = document.querySelector('#SearchBtn')
const loginEl = document.querySelector('#login')
const nameEl = document.querySelector('#name')
const locationEl = document.querySelector('#location')
const emailEl = document.querySelector('#email')

SearchBtn.addEventListener('click', function() {
    let username = UserEl.value
    let url = `https://api.github.com/users/${username}`
    contEl.classList.remove("invisible")
    fetch(url, {
        cache: 'reload',
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    .then(function(response){
        if (!response.ok) {
            console.log(`Error fetching data.. ${response.status}`)
            return
        }

        response.json()
        .then(function(data) {
            loginEl.innerHTML = 'Username : '+data.login

            if (data.name != null) {
                nameEl.innerHTML = 'Name : '+data.name
            } else {
                nameEl.remove()
            }

            if (data.location != null) 
            {
                locationEl.innerHTML = 'Location : '+data.location
            } else {
                locationEl.remove()
            }

            if (data.email != null) 
            {
                emailEl.innerHTML = 'Email : '+data.email
            } else {
                emailEl.remove()
            }
        })
    })

    .catch(function(error){
        console.log(`Error : ${error}`)
    })

    contEl.classList.add("visible")
})