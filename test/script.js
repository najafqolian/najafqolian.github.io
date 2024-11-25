document.addEventListener("DOMContentLoaded", () => {
    const projectSection = document.querySelector(".project-list");
    const publicationSection = document.querySelector(".publication-list");
    const projectToggleBtn = document.getElementById("toggle-projects");
    const publicationToggleBtn = document.getElementById("toggle-publications");

    projectSection.style.maxHeight = "400px";
    publicationSection.style.maxHeight = "400px";

    projectToggleBtn.addEventListener("click", () => {
        const isCollapsed = projectSection.style.maxHeight === "400px";
        projectSection.style.maxHeight = isCollapsed ? "none" : "400px";
        projectToggleBtn.textContent = isCollapsed ? "Show Less" : "Show More";
    });

    publicationToggleBtn.addEventListener("click", () => {
        const isCollapsed = publicationSection.style.maxHeight === "400px";
        publicationSection.style.maxHeight = isCollapsed ? "none" : "400px";
        publicationToggleBtn.textContent = isCollapsed ? "Show Less" : "Show More";
    });
});
