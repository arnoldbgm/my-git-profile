const card = document.querySelector("#card")
const inputData = document.querySelector("#input-data")
const btnSearch = document.querySelector("#btn-search")
let dataValue = ""

btnSearch.addEventListener("click", async function () {
    dataValue = inputData.value
    const response = await fetch(`https://api.github.com/users/${dataValue}`);
    const data = await response.json();

    console.log(data)

    card.innerHTML = `
   <img src="${data.avatar_url}" alt="" width="450px">
           <h1>${data.login}</h1>
           <h2>Followers ${data.followers}</h2>`
})

// async function conection() {
//     const response = await fetch(`https://api.github.com/users/${dataValue}`);
//     const data = await response.json();
//     console.log(data)
// }
