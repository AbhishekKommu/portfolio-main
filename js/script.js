// Portfolio JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("Kommu Abhishek Portfolio Loaded");

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});