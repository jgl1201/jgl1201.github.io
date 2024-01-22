export const domManipulator = {
    changeContent: function (elementId, newContent) {
        document.getElementById(elementId).innerText = newContent;
    },

    hideElement: function (elementId) {
        document.getElementById(elementId).style.display = "none";
    },

    setActiveLink: function (links, currentSection) {
        links.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }
};