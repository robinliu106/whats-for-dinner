console.log("app.js is ruunning");

//JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
    </div>
);

var templateTwo = (
    <div>
        <h1>Robin Liu</h1>
        <p>Age: 24</p>
        <p>Location: Boston</p>
    </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
