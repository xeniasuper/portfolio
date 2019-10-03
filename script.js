'use strict';

let projects = [...document.getElementsByClassName("project")];

projects.forEach((project) => {
    project.addEventListener("mouseover", (event) => {
        project.children[1].children[0].style.textDecoration = "underline";
    });

    project.addEventListener("mouseleave", (event) => {
        project.children[1].children[0].style.textDecoration = "none";
    });
});