"use strict";

var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var helloContinents = Array.from(continents, function (c) {
  return "Hello ".concat(c, "!");
});
var message = helloContinents.join('<br>');
var element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("h1", {
  className: "red-text",
  dangerouslySetInnerHTML: {
    __html: message
  }
}));
ReactDOM.render(element, document.querySelector('#root'));