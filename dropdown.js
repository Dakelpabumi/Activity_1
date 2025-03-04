function dropdown(event) {
    // Prevent the default action
    // event.preventDefault();

    // Get the clicked header
    var header = event.currentTarget;

    // Toggle the 'show' class on the corresponding dropdown content
    var dropdownContent = header.nextElementSibling;
    dropdownContent.classList.toggle("show");

    // Remove the 'active' class from all headers
    var headers = document.getElementsByClassName("sign-up-step-header");
    for (var i = 0; i < headers.length; i++) {
        headers[i].classList.remove("active");
    }

    // Add the 'active' class to the clicked header
    header.classList.add("active");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("sign-up-image");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

        var headers = document.getElementsByClassName("sign-up-step-header");
        for (var i = 0; i < headers.length; i++) {
            headers[i].classList.remove("active");
        }
    }
};

// Attach the dropdown function to the click event of the headers
document.addEventListener('DOMContentLoaded', function() {
    var headers = document.getElementsByClassName('sign-up-step-header');
    for (var i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', dropdown);
    }
});