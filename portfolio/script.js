// Navbar active section highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Modal & Image Zoom (SAFE VERSION)
document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("flowchartModal");
    const viewer = document.getElementById("imageViewer");
    const viewerImg = document.getElementById("viewerImg");

    document.addEventListener("click", (e) => {

        if (e.target.closest("#flowchartDetailsBtn")) {
            modal.classList.add("active");
        }


        if (
            e.target.classList.contains("close-btn") ||
            e.target === modal
        ) {
            modal.classList.remove("active");
        }

        if (e.target.classList.contains("zoomable")) {
            viewerImg.src = e.target.src;
            viewer.classList.add("active");
        }

        if (e.target === viewer) {
            viewer.classList.remove("active");
        }
    });

});
