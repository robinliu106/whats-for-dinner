import React from "react";
import Header from "./Header";
import AddOption from "./AddOption"; //importing defaults doesn't require {}
import Action from "./Action";
import Options from "./Options";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
    };

    constructor(props) {
        super(props);
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => optionToRemove !== option
            ),
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option),
        }));
    };

    //life cycle methods
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            //Do nothing if json data from form is invalid
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("saving data");
        }
    }

    render() {
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
