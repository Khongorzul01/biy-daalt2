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
// let butn = document.querySelector(".vdo-icon");

// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request

// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code

document.querySelector(".modal1").innerHTML = `
<button type="button" class="vdo-icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img  src="/images/play-icon.svg" alt="">
                <!-- <div id="modal"></div> -->
              </button>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/S9cdlVg3LDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>
      </div>
    </div>
  </div>`;

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
      let sec2 = "<div class='row'>";
      data1.data.map((el) => {
        sec2 += `<div class="col-12 col-md-12 col-lg-4 col-xl-4">
        <div class="latest">
          <img src='${el.thumbnail}' class="card-img-top" alt="..." />
          <div class="home-service-body1">
            <h4 class="card-title">${el.title}</h4>
            <p class="card-text">
              ${el.content}
            </p>
            <div class="atag">
              <a href="#">Learn more</a>
            </div>
          </div>
        </div> 
      </div>`;
        document.querySelector("#section2").innerHTML = sec2 + "</div>";
      });
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
