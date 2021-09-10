/** @format */

const url_api = "https://api.jikan.moe/v3/search/anime?q=naruto";
const container = document.querySelector(".results");
console.log(url_api);
async function callingAPI() {
  try {
    const response = await fetch(url_api);
    const data = await response.json();
    console.log(data);

    const details = data.results;
    console.log(details);
    for (let i = 0; i < details.length; i++) {
      console.log(details[i].title);
      console.log(details[i].score);
      console.log(details[i].type);
      if (i === 20) {
        break;
      }

      //<div class="result" style="background-image: url(${details.image_url});"></div>
      container.innerHTML += `<a href="details.html?id=${details.mal_id}" class="result">
      
    <div class="title">Title:${details[i].title}</div> 
    <div class="score">Score: ${details[i].score}</div> 
    <div class="type">Type: ${details[i].type}</div> </a> 
    `;
    }
  } catch (error) {
    console.log(error);
  }
}

callingAPI();
