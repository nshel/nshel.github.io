function openNav() {
    document.getElementById("sNav").style.display = 'block';
    document.getElementById("cl").style.display = "block";
}

function closeNav() {
    document.getElementById("sNav").style.display = 'none';
    // document.getElementById("cl").style.display = 'none';
    // document.getElementById("contentID").style.marginLeft = "2%";
}

// window.onresize = function() {
//     responseDeviceSize();
// }

// window.onload = function() {
//     // responseDeviceSize();
//     let content = document.getElementById("contentID");
//     if (window.innerWidth <= 600) {
//         content.style.maxWidth = "97%";
//         content.style.backgroundColor = "white";
//         content.style.boxShadow = "none";
//     }
// }

function responseDeviceSize() {

    /**
     * If the width of the window is greater than or equals 1000
     * then, make the side nav visible
     */
     let content = document.getElementById("contentID");

     if (window.innerWidth >= 1000) {

        document.getElementById("sNav").style.display = 'block';
        document.getElementById("cl").style.display = 'none';
        document.getElementById("opener").style.display = 'none';
        document.getElementById("contentID").style.marginLeft = "255px";
        content.style.maxWidth = "750px";
        content.style.backgroundColor = "transparent";
        content.style.boxShadow = "0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";

    } else {

        document.getElementById("sNav").style.display = 'none';
        document.getElementById("opener").style.display = 'block';
        document.getElementById('cl').style.display = 'block';
        document.getElementById("contentID").style.marginLeft = '2%';
        content.style.maxWidth = "97%";
        content.style.backgroundColor = "white";
        content.style.boxShadow = "none";
    }
    
    // if (window.innerWidth <= 600) {
    //     content.style.width = "97%";
    //     content.style.backgroundColor = "white";
    //     content.style.boxShadow = "none";
    // } else {
    //     content.style.maxWidth = "750px";
    //     content.style.backgroundColor = "transparent";
    //     content.style.boxShadow = "0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    // }
}

function myFilter() {

    let menu = document.getElementById('menuList');
    let filter_value = document.getElementById('mySearch').value.toLowerCase();
    let elements = menu.getElementsByTagName("li");

    for (let i = 0; i < elements.length; i++) {
        x = elements[i].getElementsByTagName("a")[0];
        if (x.innerHTML.toLowerCase().indexOf(filter_value) > -1) {
            elements[i].style.display = "";
        } else {
            elements[i].style.display = "none";
        }
    }
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {stick()};

// Get the navbar
var navbar = document.getElementById("topNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// function for opening the left nav
function openLeftNav() {

    document.getElementById('leftNav').style.display = 'block';
}
// for closeing the left nav
function closeLeftNav() {
    document.getElementById('leftNav').style.display = 'none';
}