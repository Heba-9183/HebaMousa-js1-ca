/** @format */

const detailContainer = document.querySelector(".anime-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("mal_id");

console.log(id);
if (id === null) {
  location.href = "/";
}

const url = "https://myanimelist.net/anime/" + id;

console.log(url);

async function fetchAnime() {
  try {
    //, { mode: "no-cors" }
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchAnime();
