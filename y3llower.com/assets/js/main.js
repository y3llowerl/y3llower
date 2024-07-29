// play #sedat-peker-voice element after page loaded, if browser blocking wait for page click anywhere
document.addEventListener("DOMContentLoaded", function () {
  // wait for interaction
  document.addEventListener("click", function () {
    document.getElementById("sedat-peker-voice").play();
  });
});

particlesJS.load(
  "particles-js",
  "https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/particles.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);

// make page unselectable
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.userSelect = "none";
  document.body.style.webkitUserSelect = "none";
  document.body.style.MozUserSelect = "none";
  document.body.style.msUserSelect = "none";
});

// make page images non right click
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
});

// make page images non dragable
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });
});