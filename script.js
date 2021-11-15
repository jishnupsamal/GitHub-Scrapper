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
const twitter = document.querySelector('#twitter')
const website = document.querySelector('#website')

SearchBtn.addEventListener('click', function() {

    let username = UserEl.value
    let url = `https://api.github.com/users/${username}`
    
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
                nameEl.style.display = 'inline'
            } else {
                nameEl.style.display = 'none'
            }

            if (data.bio != null) 
            {
                bio.innerHTML = `<h6>${data.bio}<h6>`
                bio.style.display = 'inline'
            } else {
                bio.style.display = 'none'
            }

            if (data.location != null) 
            {
                locationEl.innerHTML = 'Location : '+data.location
                locationEl.style.display = 'inline'
            } else {
                locationEl.style.display = 'none'
            }

            if (data.email != null) 
            {
                emailEl.innerHTML = 'Email : '+data.email
                emailEl.style.display = 'inline'
            } else {
                emailEl.style.display = 'none'
            }

            if (data.type != null) 
            {
                type.innerHTML = `${data.type}`
                type.style.display = 'inline'
            } else {
                type.style.display = 'none'
            }

            p_repos.innerHTML = 
            `Public Repos : ${data.public_repos}`

            if (data.twitter_username != null) 
            {
                twitter.innerHTML = 
                `<a href='https://twitter.com/${data.twitter_username}' target='_blank'><i class="bi bi-twitter"></i></a>`
                twitter.style.display = 'inline'
            } else {
                twitter.style.display = 'none'
            }

            if (data.blog != null) 
            {
                website.innerHTML = `Website : <a href="https://${data.blog}">${data.blog}<a>`
                website.style.display = 'inline'
            } else {
                website.style.display = 'none'
            }
        })
    })

    .catch(function(error){
        console.log(`Error : ${error}`)
    })

    contEl.classList.remove("invisible")
})
