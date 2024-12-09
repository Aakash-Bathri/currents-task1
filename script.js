document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with scroll-based animation classes
    const animatedElements = document.querySelectorAll(
        ".scroll-slide-up, .scroll-slide-left, .scroll-slide-right, .scroll-zoom"
    );

    // Observer options
    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    // IntersectionObserver callback
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class to trigger animation
                entry.target.classList.add("active");

                // Stop observing once the animation has been triggered
                observer.unobserve(entry.target);
            }
        });
    };

    // Create and configure the IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each animated element
    animatedElements.forEach(element => observer.observe(element));
});
