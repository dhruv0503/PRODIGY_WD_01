document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.getElementById("hoverOverMe")

    paragraph.addEventListener("mouseover", function () {
        paragraph.style.color = "red";
    });

    paragraph.addEventListener("mouseout", function () {
        paragraph.style.color = "";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("iBecomeGreen")

    heading.addEventListener("mouseover", function () {
        heading.style.color = "green";
    });

    heading.addEventListener("mouseout", function () {
        heading.style.color = "";
    });
});


