(function () {
    'use strict';

    let projects = [...document.getElementsByClassName("project")];
    let yellow = "#ffcc00";

    projects.forEach((project) => {
        let projectLink = project.children[1].children[0].children[0];
        projectLink.style.color = "#000000";

        project.addEventListener("mouseover", () => {
            projectLink.style.color = yellow;
        });

        project.addEventListener("mouseleave", () => {
            projectLink.style.color = "#000000";
        });
    });
})();