console.log("It is alive!");

const starWarsListEl = document.querySelector(".main-container");
const charcterEl = document.querySelector("#character")

const STARWARS_URL = "https://swapi.dev/api/people";

function fetchStarWars() {
    fetch(STARWARS_URL)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            renderStarWarsTable(starWarsListEl, data);
        });
}

fetchStarWars()

charcterEl.addEventListener("click", function () {
    fetchStarWars("https://swapi.dev/api/people");
})

function renderStarWarsTable(containerEl, peopleData) {
    let tableHTML = "";
    for (let person of peopleData.results) {
        tableHTML += `
      <tr>
        <td>${person.name}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        <td>${person.gender}</td>
        <td>${person.birth_year}</td>
        <td>${person.films.length}</td>
      </tr>
      `;
    }

    containerEl.innerHTML = `
         <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Gender</th>
                <th>Birth Year</th>
                <th>Appearances</th>
              </tr>
            </thead>
            <tbody>
              ${tableHTML}
            </tbody>
          </table>
      `;
}

