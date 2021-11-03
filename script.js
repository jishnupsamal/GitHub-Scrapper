const contEl = document.querySelector("#container")
const UserEl = document.querySelector("#user")
const SearchBtn = document.querySelector('#SearchBtn')
const loginEl = document.querySelector('#login')
const nameEl = document.querySelector('#name')
const locationEl = document.querySelector('#location')
const emailEl = document.querySelector('#email')
const avatar = document.querySelector('#avatar')
const bio = document.querySelector('#bio')
const type = document.querySelector('#type')
const p_repos = document.querySelector('#prepos')

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
            loginEl.innerHTML = `Username : <a href='${data.html_url}' target='_blank'>${data.login}</a>`

            avatar.innerHTML = `<img src=${data.avatar_url} height='100px' width='100px'></img>`

            if (data.name != null) {
                nameEl.innerHTML = `<h3>${data.name}</h3>`
            } else {
                nameEl.innerHTML = ''
            }

            if (data.bio != null) 
            {
                bio.innerHTML = `<h6>${data.bio}<h6>`
            } else {
                bio.innerHTML = ''
            }

            if (data.location != null) 
            {
                locationEl.innerHTML = 'Location : '+data.location
            } else {
                locationEl.innerHTML = 'Location : Unavailable'
            }

            if (data.email != null) 
            {
                emailEl.innerHTML = 'Email : '+data.email
            } else {
                emailEl.innerHTML = 'Email : Unavailable'
            }

            if (data.type != null) 
            {
                type.innerHTML = `${data.type}`
            } else {
                type.innerHTML = ''
            }

            p_repos.innerHTML = 
            `Public Repos : ${data.public_repos}`
        })
    })

    .catch(function(error){
        console.log(`Error : ${error}`)
    })

    contEl.classList.add("visible")
})