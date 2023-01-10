var submitEl = document.querySelector("#submit");

var requestUrl = "https://www.loc.gov/ " + "fo=json"

var dropDown= document.querySelector("#selectFormat")
var searchText= document.querySelector("#searchText")
var format = ("maps", "audio", "photos", " manuscripts"," newspapers", "film-and-videos", "notated-music", "websites");

var getFormat = function (user) {
    var apiUrl = 'https://www.loc.gov/' + formatDropdown + '/?q=' + searchText + "fo=json";
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos(data, user);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };

function handleBtn(event){
   //On button click
   var formatChoice = event.target 

}
submitEl.addEventListener("click", handleSubmit());