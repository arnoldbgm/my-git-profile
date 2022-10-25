const btnSearch = document.querySelector("#btn-search")
const imgUser = document.querySelector("#img-user")
const containerImg = document.querySelector(".image-container")
const containerUser = document.querySelector(".user-date-container")
const containerBio = document.querySelector(".user-bio-container")
const cardInformation = document.querySelector(".card-information")
const infoContainer = document.querySelector(".info-container")
const url = "https://api.github.com/users/arnoldbgm"

async function conection() {
    const respuesta = await fetch(url);
    const data = await respuesta.json();

    console.log(data.avatar_url);
    containerImg.innerHTML = `<img width="100" id="img-user" src="${data.avatar_url}" alt="">`
    containerUser.innerHTML = `<h2>${data.login}</h2>`
    containerBio.innerHTML = `<p>@${data.login}</p>`
    cardInformation.innerHTML = `<div>
        <h5>Repos</h5>
        <h2>${data.public_repos}</h2>
    </div>
    <div>
        <h5>Followers</h5>
        <h2>${data.followers}</h2>
    </div>
    <div>
        <h5>Following</h5>
        <h2>${data.following}</h2>
    </div>`
    infoContainer.innerHTML=`<div>
    <p><img width="15" src="./images/pin.png"/>&nbsp;${data.location}</p>
    <p><img width="15" src="./images/twitter.png"/>&nbsp;${data.twitter_username}</p>
</div>
<div>
    <p><img width="15" src="./images/link.png"/>&nbsp;${data.html_url}</p>
    <p><img width="15" src="./images/hotel.png"/>&nbsp;@${data.login}</p>
</div>`
}



conection();