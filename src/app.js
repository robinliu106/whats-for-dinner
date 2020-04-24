class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";

        const options = ["thing 1", "thing 2", "thing 4"];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("handlePick");
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                {this.props.options.map((option) => (
                    <Option key={option} optionText={option} />
                ))}
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <div>Option: {this.props.optionText}</div>;
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            // app.options.push(option);
            e.target.elements.option.value = "";
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
