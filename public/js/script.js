
    const navbar = document.querySelector(".navbar");
    const originalColor = "#1B3C73"; 
    const navbarHeight = navbar.offsetHeight;

    window.onscroll = function() {
        let contentTop = document.querySelector(".contents").offsetTop;
        let myPhotoTop = document.querySelector(".myPhoto").offsetTop;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop < contentTop - navbarHeight || scrollTop === 0 || scrollTop < myPhotoTop - navbarHeight) {
        navbar.style.backgroundColor = "transparent"; // Change to transparent if content is not below navbar or photo is above navbar
    } else {
        navbar.style.backgroundColor = originalColor; // Change to your default color when scrolling down and content is below navbar and photo
    }
    }
    document.getElementById("openForm").addEventListener("click", function() {
            document.getElementById("contactForm").style.display = "block";
        });

        document.getElementById("contact-btn").addEventListener("click", function() {
            document.getElementById("contactForm").style.display = "block";
        });


        document.getElementById("closeForm").addEventListener("click", function() {
            document.getElementById("contactForm").style.display = "none";
        });

        document.body.addEventListener('click', function(event) {
    var navbar = document.querySelector('.navbar-collapse');
    var toggleButton = document.querySelector('.navbar-toggler');
    
    // Check if the clicked element is inside the navbar
    var isInsideNavbar = navbar.contains(event.target);
    var isToggleButton = toggleButton.contains(event.target);

    // Close the toggle button if the clicked element is outside the navbar and not the toggle button itself
    if (!isInsideNavbar && !isToggleButton) {
        navbar.classList.remove('show');
    }
});

//porfolio
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", revealWorkExperience);
});

 // Function to open the contact form and scroll to it
 function openContactForm() {
        const contactForm = document.getElementById("contactForm");
        contactForm.style.display = "block";
        contactForm.scrollIntoView({ behavior: 'smooth' });
    }

    // Event listener for the "Let's Talk" button
    document.getElementById("openForm").addEventListener("click", openContactForm);

    // Event listener for the "Contact" link in the navbar
    document.getElementById("contact-btn").addEventListener("click", openContactForm);

    // Event listener to close the contact form
    document.getElementById("closeForm").addEventListener("click", function() {
        document.getElementById("contactForm").style.display = "none";
    });

    // Event listener to close the navbar menu when clicking outside of it
    document.body.addEventListener('click', function(event) {
        var navbar = document.querySelector('.navbar-collapse');
        var toggleButton = document.querySelector('.navbar-toggler');
        
        // Check if the clicked element is inside the navbar
        var isInsideNavbar = navbar.contains(event.target);
        var isToggleButton = toggleButton.contains(event.target);

        // Close the toggle button if the clicked element is outside the navbar and not the toggle button itself
        if (!isInsideNavbar && !isToggleButton) {
            navbar.classList.remove('show');
        }
    });

    // Function to reveal work experience items on scroll
    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("scroll", revealWorkExperience);
    });

    function revealWorkExperience() {
        const workExperiences = document.querySelectorAll(".work-experience");
        
        workExperiences.forEach((experience) => {
            const content = experience.querySelector(".work-experience-content");
            const line = experience.querySelector(".line");
            
            if (isElementInViewport(experience) && !content.classList.contains("revealed")) {
                content.classList.add("show");
                line.classList.add("show");
                content.classList.add("revealed");
                line.classList.add("revealed");
            }
        });
    }

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }