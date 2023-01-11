var submitEl = document.querySelector("#submit");


var submit = document.querySelector("#submit")
var searchText= document.querySelector("#form-select")

submit.addEventListener("click", function(event) {
  event.preventDefault();

var formatInput = $('#selectFormat').val();
var textInput = $('#searchText').val();
var userSearch ='https://www.loc.gov/' + formatInput+ '/?q=' + textInput + '&fo=json';

getFormat();
console.log(formatInput);
console.log(textInput);
console.log(userSearch);

function getFormat () {

  fetch(userSearch)
    .then(function (response) {
      if (response.ok) {

        response.json().then(function () {


console.log (subjects);
        });

      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
};


}); 






//submitEl.addEventListener("click", handleSubmit());