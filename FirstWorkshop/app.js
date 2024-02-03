console.log("It is alive!");

const starWarsListPeople = document.querySelector(".container-two");
const starWarsListShips = document.querySelector(".container-three");
const charcterEl = document.querySelector("#character")
const shipEl = document.querySelector("#ship")

const STARWARS_URL = "https://swapi.dev/api/people";
const STARWARS_URL_ONE = "https://swapi.dev/api/starships";

function fetchStarWarsPeople() {
  fetch(STARWARS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderStarWarsTablePeople(starWarsListPeople, data);
    });
}

function fetchStarWarsShips() {
  fetch(STARWARS_URL_ONE)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderStarWarsTableShips(starWarsListShips, data);
    });
}

charcterEl.addEventListener("click", function () {
  fetchStarWarsPeople("https://swapi.dev/api/people");
})

shipEl.addEventListener("click", function () {
  fetchStarWarsShips("https://swapi.dev/api/starships")
})

function renderStarWarsTablePeople(containerEl, peopleData) {
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

function renderStarWarsTableShips(containerEl, shipsData) {
  let tableHTML = "";
  for (let ship of shipsData.results) {
    tableHTML += `
      <tr>
        <td>${ship.name}</td>
        <td>${ship.model}</td>
        <td>${ship.manufacturer}</td>
        <td>${ship.cost_in_credits}</td>
        <td>${ship.passengers}</td>
        <td>${ship.starship_class}</td>
      </tr>
      `;
  }

  containerEl.innerHTML = `
         <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Model</th>
                <th>Manufacturer</th>
                <th>Cost</th>
                <th>Crew</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              ${tableHTML}
            </tbody>
          </table>
      `;
}

