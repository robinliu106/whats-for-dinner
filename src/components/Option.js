import React from "react";

//cannot export default for constants,
// 1 possible solution is to remove constant definition, but this will cause React to use unknown in dev tools
//better solution is to name function and export below
const Option = (props) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
);

export default Option;
