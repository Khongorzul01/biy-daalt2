// Use window.addEventListener("scroll",) Event listener.
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount
function scrollDetect(event) {
  let a = document.querySelector("nav");
  if (event.target.scrollingElement.scrollTop > 700) {
    a.classList.add("fixed-top");
    a.style.backgroundColor = "white";
  } else {
    a.classList.remove("fixed-top");
  }
}
// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener
window.addEventListener("scroll", scrollDetect);

// Define Play button variable

// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request

// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code
document.addEventListener("click", () => {
  finsetModal.show();
});

// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request\
let url = "data/company_intro.json";
// console.log(url);
newFunc(url);
function newFunc(url) {
  let data = new XMLHttpRequest();
  data.onreadystatechange = function () {
    if (data.readyState === 4) {
      const data1 = JSON.parse(data.responseText);
      console.log(data1.data);
      //   document.getElementById("section2").innerHTML = data1.data;
    }
  };
  data.open("GET", url);
  data.send();
}

// console.log(newFunc());
/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create
