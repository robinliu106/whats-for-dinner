console.log("build it is running");

const app = {
    show: "Show Details",
    title: "Show Details",
    otherTitle: "Hide Details",
    text: "",
};

const onToggle = () => {
    if (app.show == app.title) {
        app.show = app.otherTitle;
        app.text = "hellooo";
    } else {
        app.show = app.title;
        app.text = "";
    }
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>{app.show}</button>
            <p>{app.text}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
