// Navbar Links
const navbar = document.querySelector(".navbar");
a=navbar.querySelectorAll("a");

a.forEach(function(element) {
	element.addEventListener("click",function() {
		for(let i=0;i<a.length;i++){
			a[i].classList.remove("active");
		}
		this.classList.add("active");

		// Close navbar when click on link
		document.querySelector(".navbar").classList.toggle("show");
	});
});


// Hamburger Menu
const hamBurger = document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function() {
	document.querySelector(".navbar").classList.toggle("show");
});

// Tabs
function infoReview(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

var Review = document.getElementById("review");
Review.addEventListener("click", function () {
  document.getElementById("latest-reviews").style.display = "none";
  document.getElementById("merchant-contact").style.display = "none";
  document.getElementById("filter-reviews").style.display = "block";
  document.getElementById("photo-reviews").style.display = "block";
});

var Info = document.getElementById("info");
Info.addEventListener("click", function () {
  document.getElementById("latest-reviews").style.display = "block";
  document.getElementById("merchant-contact").style.display = "block";
  document.getElementById("filter-reviews").style.display = "none";
  document.getElementById("photo-reviews").style.display = "none";
});