function getMovieInfosOMDB(title){
    const url = `http://www.omdbapi.com/?t=${title}&apikey=790af7bc`  
       
    fetch(url)
    .then(response => response.json())
    .then(data => {

    
        if(data.Response == 'False'){

            movieTitle2.textContent = "Filme Não Encontrado! Tente Novamente.";
            descriptionBodyNotFound.style.marginBottom = '30px'
            movieTitle.textContent = "  "
            movieYear.textContent = ""
            movieGenre.textContent = ""
            movieRuntime.textContent = ""
            imdbRating.textContent = ""
            movieInfo.textContent = " "
            movieWriter.textContent = "  "
            movieDirector.textContent = ""

            movieescritor.textContent = ""
            moviedirector.textContent = ""

            movieinferior.textContent = ""
            moviename.textContent = ""
            
            formSearch.style.marginTop = '5px'
            moviename.style.marginTop = '20px'
            movieTitle2.style.marginTop = '250px' 
            moviePoster.style.backgroundImage = `url(erro.png)`


            


        }else {
            descriptionBodyNotFound.textContent = "";
            
            movieTitle.textContent = data.Title
            movieYear.textContent = data.Year
            movieGenre.textContent = data.Genre
            movieRuntime.textContent = data.Runtime
            imdbRating.textContent = data.imdbRating
            movieInfo.textContent = data.Plot
            movieWriter.textContent = data.Writer
            movieDirector.textContent = data.Director
            moviePoster.style.backgroundImage = `url(${data.Poster})`

            movieescritor.textContent = "Escrito por: "
            moviedirector.textContent = "Dirigido por: "
            movieTitle2.textContent = ""
            movieapi.textContent = ""
            movieavaliacao.textContent = ""
            moviename.textContent = ""
        
            formSearch.style.marginTop = '5px'
    
        }
      
     })  
}

var form = document.getElementById('formSearch');
var title = document.getElementById('title');

form.addEventListener('submit', function(e) {
    
    getMovieInfosOMDB(title.value)
    // impede o envio do form
    e.preventDefault();


});


 
