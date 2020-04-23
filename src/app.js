console.log("app.js is ruunning");

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}

            <p>
                {app.options.length > 0
                    ? "Here are your options"
                    : "No Options"}
            </p>
            <p>{app.options.length}</p>

            <button onClick={onRemoveAll}>Remove All</button>

            <ol>
                <li>Item one</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();

//Run 2 terminals
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public
