$(document).ready(function() {



  /* --------------------------- */
  /* --------------------------- */
  /*    FONCTION RECHERCHE       */
  /* --------------------------- */
  /* --------------------------- */

  $(".button").click(function(event){
    event.preventDefault();
    document.getElementById("suivant").style.visibility = "visible";
    document.getElementById("precedent").style.visibility = "visible";

    var v = document.getElementById("ville").value;

      $.ajax({

        dataType: "json",
        url: "https://api.themoviedb.org/3/search/movie/?api_key=84298ce1f4116edf6c28f5353209f4a4&query="+v+"",
        jsonpCallback: "callback",

        success: function (data) {
            // Je charge les données dans box
            console.log(data);

            if(data.results[0] != null ){

            document.getElementById("img").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[0].poster_path +"'></img>";
            document.getElementById("titre").innerHTML = data.results[0].original_title;
            document.getElementById("note").innerHTML = "note : "+data.results[0].vote_average;
            document.getElementById("votes").innerHTML ="nombre de votes : " +data.results[0].vote_count;

            document.getElementById("date").innerHTML = "date de sortie : "+ data.results[0].release_date;
            document.getElementById("over").innerHTML = "Synopsis : " + data.results[0].overview;
            document.getElementById("idfilm").innerHTML = data.results[0].id;
            }
            else{
              alert("Aucun film trouvé");
            }

        },
        error: function(data) {
            // J'affiche un message d'erreur
            alert("Nom de film non valide");
            console.log(data);
        }

      });
});



/* --------------------------- */
/* --------------------------- */
/* FONCTION BOUTON PRECEDENT   */
/* --------------------------- */
/* --------------------------- */
$("button#precedent").click(function(event){
  event.preventDefault();

  var v = parseInt($("span#idfilm").text()) - 1;

    $.ajax({

      dataType: "json",
      url: "https://api.themoviedb.org/3/movie/"+v+"?api_key=84298ce1f4116edf6c28f5353209f4a4",
      jsonpCallback: "callback",

      success: function (data) {
          // Je charge les données dans box
          console.log(data);

          if(data != null ){
          $("button#suivant").fadeIn();

          document.getElementById("img").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.poster_path +"'></img>";
          document.getElementById("titre").innerHTML = data.original_title;
          document.getElementById("note").innerHTML = "note : "+data.vote_average;
          document.getElementById("votes").innerHTML ="nombre de votes : " +data.vote_count;

          document.getElementById("date").innerHTML = "date de sortie : "+ data.release_date;
          document.getElementById("over").innerHTML = "Synopsis : " + data.overview;
          document.getElementById("idfilm").innerHTML = data.id;

          }
          else{
            alert("Aucun film trouvé");
          }

      },
      error: function(data) {
          // J'affiche un message d'erreur
          $("button#precedent").fadeOut();
          alert("Plus de films précédents");
          console.log(data);
      }

    });

});




/* --------------------------- */
/* --------------------------- */
/* FONCTION BOUTON SUIVANT */
/* --------------------------- */
/* --------------------------- */
$("button#suivant").click(function(event){
  event.preventDefault();

  var v = parseInt($("span#idfilm").text()) + 1;

    $.ajax({

      dataType: "json",
      url: "https://api.themoviedb.org/3/movie/"+v+"?api_key=84298ce1f4116edf6c28f5353209f4a4",
      jsonpCallback: "callback",

      success: function (data) {
          // Je charge les données dans box
          console.log(data);

          if(data != null ){
          $("button#precedent").fadeIn();
          document.getElementById("img").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.poster_path +"'></img>";
          document.getElementById("titre").innerHTML = data.original_title;
          document.getElementById("note").innerHTML = "note : "+data.vote_average;
          document.getElementById("votes").innerHTML ="nombre de votes : " +data.vote_count;

          document.getElementById("date").innerHTML = "date de sortie : "+ data.release_date;
          document.getElementById("over").innerHTML = "Synopsis : " + data.overview;
          document.getElementById("idfilm").innerHTML = data.id;
          }
          else{
            alert("Aucun film trouvé");
          }

      },
      error: function(data) {
          // J'affiche un message d'erreur
          $("button#suivant").fadeOut();
          alert("Plus de films suivants");
          console.log(data);
      }

    });

});





/* --------------------------- */
/* --------------------------- */
/* FONCTION TOP 6 DES FILMS LES PLUS POPULAIRES */
/* --------------------------- */
/* --------------------------- */
function top6() {
  $.ajax({

    dataType: "json",
    url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=84298ce1f4116edf6c28f5353209f4a4",
    jsonpCallback: "callback",

    success: function (data) {
        // Je charge les données dans box
        console.log(data);

        var j;

        var img = [];
        var titre = [];
        var note = [];
        var votes = [];
        var date = [];
        var over = [];

        for(j=0;j<7;j++){
            img[j]="#img"+j.toString();
            titre[j]="#titre"+j.toString(),
            note[j] ="#note"+j.toString();
            votes[j] = "#votes"+j.toString();
            date[j] = "#date"+j.toString();
            over[j] = "#over"+j.toString();
        }

        var i;

        for(i=0;i<7;i++){

            $(img[i]).innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[i].poster_path +"'></img>";
            $(titre[i]).innerHTML = data.results[i].original_title;
            $(note[i]).innerHTML = "note : "+data.results[i].vote_average;
            $(votes[i]).innerHTML ="nombre de votes : " +data.results[i].vote_count;

            $(date[i]).innerHTML = "date de sortie : "+ data.results[i].release_date;
            $(over[i]).innerHTML = "Synopsis : " + data.results[i].overview;
          }

    },
    error: function(data) {
        // J'affiche un message d'erreur
        alert("Plus de films suivants");
        console.log(data);
    }

  });
}


$("button#boutontop6").click(function(event){

  top6();

});
















});
