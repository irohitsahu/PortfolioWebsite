window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
// -------------------------------
window.onscroll = function () { myFunction() };

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}

// ---------------------------------

function openForm(x) {

    const tabOpen = document.getElementsByClassName("tab-links");
    if (x === 'projects') {
        if (document.getElementById(x).style.display === "block") {
            document.getElementById(x).style.display = "none"
            tabOpen[1].classList.remove("tab-links-focus")
        }
        else {
            document.getElementById(x).style.display = "block"
            document.getElementById('skills').style.display = "none"
            document.getElementById('education').style.display = "none"
            tabOpen[1].classList.add("tab-links-focus")
            tabOpen[3].classList.remove("tab-links-focus")
            tabOpen[2].classList.remove("tab-links-focus")
        }
    }
    if (x === 'skills') {
        if (document.getElementById(x).style.display === "block") {
            document.getElementById(x).style.display = "none"
            tabOpen[2].classList.remove("tab-links-focus")
        }
        else {
            document.getElementById(x).style.display = "block"
            document.getElementById('education').style.display = "none"
            document.getElementById('projects').style.display = "none"
            tabOpen[2].classList.add("tab-links-focus")
            tabOpen[1].classList.remove("tab-links-focus")
            tabOpen[3].classList.remove("tab-links-focus")
        }

    }
    if (x === 'education') {
        if (document.getElementById(x).style.display === "block") {
            document.getElementById(x).style.display = "none"
            tabOpen[3].classList.remove("tab-links-focus")
        }

        else {
            document.getElementById(x).style.display = "block"
            document.getElementById('skills').style.display = "none"
            document.getElementById('projects').style.display = "none"
            tabOpen[3].classList.add("tab-links-focus")
            tabOpen[1].classList.remove("tab-links-focus")
            tabOpen[2].classList.remove("tab-links-focus")
        }
    }
}
