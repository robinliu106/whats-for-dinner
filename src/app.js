console.log("app.js is ruunning");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["Option One", "Option Two"],
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}

        <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name: "Robin",
    age: 25,
    location: "Davis Square",
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>

        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
