function fetchSimpson() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`
    axios.get(url)
    .then(function(response){
        // console.log(response)
        return response.data[0]
    })
    .then(function(simpson) {
        // console.log('data', simpson)
        const simpsonHtml = 
        `<p><strong>${simpson.character}</strong></p>
        <img src="${simpson.image}" />
        <p><strong>${simpson.quote}</strong></p>`;
        document.querySelector('#simpson').innerHTML = simpsonHtml
    })
}

fetchSimpson()

document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById(fetchSimpson())
});