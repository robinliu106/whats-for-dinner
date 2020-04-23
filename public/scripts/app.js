"use strict";

console.log("app.js is ruunning");

//JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Robin Liu"
    ),
    React.createElement(
        "p",
        null,
        "Age: 24"
    ),
    React.createElement(
        "p",
        null,
        "Location: Boston"
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
