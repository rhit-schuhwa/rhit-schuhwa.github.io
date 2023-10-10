var rhit = rhit || {};

rhit.PageController = class {
    constructor() {
        const topButton = document.querySelector(".topBtn");
        topButton.onclick = () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

        // Adapted from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
        window.onscroll = () => {
            if (document.body.scrollTop > 108 || document.documentElement.scrollTop > 108) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        };
    }
};

rhit.main = function () {
    console.log("Hi Dr. Mom!! (or grader)");
    new rhit.PageController();
};

rhit.main();