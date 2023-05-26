let url = "https://kontests.net/api/v1/all";
const cardV = document.querySelector(".cardData");

fetch(url)
  .then((res) => res.json())
  .then((val) => {
    console.log(val);
    for (let i = 0; i < val.length; i++) {
      console.log(val[i]);
      cardV.innerHTML += `
        
      <div class="card text-center" style="width: 20rem;">
        <img src="https://rooturaj.com/wp-content/uploads/2022/06/Coding-Competition-Kids-post-01.jpg" class="card-img-top" alt="error">
        <div class="card-body">
            <h5 class="card-title">${val[i].name}</h5>
            <p class="card-text">Start Time : ${val[i].start_time.substring(
              0,
              10
            )}</p>
            <p class="card-text">End Time : ${val[i].end_time.substring(
              0,
              10
            )}</p>
            <a href="${
              val[i].url
            }" class="btn btn-primary "> Visit To Know About</a>
        </div>
       </div>
       
      `;
    }
  });
