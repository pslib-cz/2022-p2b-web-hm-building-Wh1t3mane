
//Hamburger Menu
const hamburgerButtons = document.querySelectorAll(".hamburger");
for (const btn of hamburgerButtons) {
    btn.onclick = (event) => {
        const menus = document.querySelectorAll(".hamburger-menu");
        for (const menu of menus) {
            menu.classList.toggle("hamburger-menu--hidden");
        }
    }
}

// Add active class to the current button (highlight it)
function nav_item_a(a) {
    var header = document.getElementById("menu");
    var nav_item = header.getElementsByClassName("nav-item");
    for (var i = 0; i < nav_item.length; i++) {
        nav_item[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            const menus = document.querySelectorAll(".hamburger-menu");
            for (const menu of menus) {
                menu.classList.toggle("hamburger-menu--hidden");
            }
        });
    }
}
function nav_item_li(li) {
    var header = document.getElementById("menu");
    var nav_item = header.getElementsByClassName("nav-item-li");
    for (var i = 0; i < nav_item.length; i++) {
        nav_item[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active-li");
            current[0].className = current[0].className.replace(" active-li", "");
            this.className += " active-li";
        });
    }
}
var a = window.matchMedia("(max-width: 832px)")
nav_item_a(a) // Call listener function at run time
var li = window.matchMedia("(min-width: 900px)")
nav_item_li(li) // Call listener function at run time


//Smooth scroll after click to link
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

/*
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });*/