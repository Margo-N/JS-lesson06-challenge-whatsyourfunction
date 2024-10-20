var startMyDay = function () {
  return "Time for coffee and a shower!";
};
//console.log(startMyDay());

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

//console.log(favoriteCookie("dark chocolate chip"));

var introduce = function (name, occupation) {
  return `My name is ${name}, and I work as a ${occupation}.`;
};

//console.log(introduce("Margo", "school psychologist"));
//console.log(introduce("Steve", "director"));
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Fantastic!");
  } else if (numGlasses < 8) {
    console.log("Better luck tomorrow!");
  }
};

//hydrationFeedback();
