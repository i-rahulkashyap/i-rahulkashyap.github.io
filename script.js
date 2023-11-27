//password for resume
function checkPassword(event) {
  var password = prompt("Please enter the password:");
  if (password !== "PassMe2Resume") {
    event.preventDefault();
    alert("Incorrect password.");
    return false;
  }
}



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



//icon animation 
var icons = ['fa-bug', 'fa-code', 'fa-bug', 'fa-cogs', 'fa-file-code', 'fa-database', 'fa-desktop', 'fa-folder-open', 'fa-server', 'fa-terminal'];
var index = 0;
setInterval(function () {
  var iconElement = document.querySelector('.navbar-brand i');
  iconElement.className = 'fa-solid ' + icons[index];
  index = (index + 1) % icons.length;
}, 1000); 




var form = document.getElementById("my-form");
async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
    'Accept': 'application/json'
}
}).then(response => {
  if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  } else {
    response.json().then(data => {
    if (Object.hasOwn(data, 'errors')) {
      status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
    } else {
      status.innerHTML = "Oops! There was a problem submitting your form"
    }
  })
}
}).catch(error => {
  status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)