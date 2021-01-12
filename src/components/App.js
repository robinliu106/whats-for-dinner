import React, { useEffect, useState } from "react";
import Header from "./Header";
import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

const App = () => {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState();

    const handleDeleteOptions = () => {
        setOptions([]);
    };

    const handleDeleteOption = (optionToRemove) => {
        setOptions(options.filter((option) => optionToRemove !== option));
    };

    const handlePick = () => {
        const randomNum = Math.floor(Math.random() * options.length);
        const option = options[randomNum];

        setSelectedOption(option);
    };

    const handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item";
        } else if (options.indexOf(option) > -1) {
            return "This option already exists";
        }
        // this.setState((prevState) => ({
        //     options: prevState.options.concat(option),
        // }));
        setOptions([...options, option]);
    };

    const handleClearSelectedOption = () => {
        setSelectedOption(null);
    };

    useEffect(() => {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            //Do nothing if json data from form is invalid
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(options);
        localStorage.setItem("options", json);
        console.log("saving data");
    }, [options]);

    return (
        <div>
            <Header />
            <div className="container">
                <Action hasOptions={options.length > 0} handlePick={handlePick} />
                <div className="widget">
                    <Options
                        options={options}
                        handleDeleteOptions={handleDeleteOptions}
                        handleDeleteOption={handleDeleteOption}
                    />
                    <AddOption handleAddOption={handleAddOption} />
                </div>
            </div>
            <OptionModal selectedOption={selectedOption} handleClearSelectedOption={handleClearSelectedOption} />
        </div>
    );
};

export default App;
