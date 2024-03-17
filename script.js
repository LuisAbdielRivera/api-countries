function getCountries(done){
    const results = fetch("https://restcountries.com/v3.1/all");
    
    results
    .then(response => response.json())
    .then(data=> {
        done(data);
    })
}

getCountries(data => {
    data.forEach(pais => {
    const article = document.createRange().createContextualFragment(`
    
    <article>
    <div class="col">
    <div class="card h-100">
      <img src="${pais.flags.png}" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${pais.name.official}</h5>
            <p class="card-text">
                Capital: ${pais.capital}<br>
                Región: ${pais.region}<br>
                Sub Región: ${pais.subregion}<br>
                Continent: ${pais.continents}<br>
                Time-Zone: ${pais.timezones}
            </p>
      </div>
    </div>
  </div>
    </article>
    `);

    const main = document.querySelector("#card");
    main.append(article);

    });
});
