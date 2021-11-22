import React, {useState} from "react";

function LightSwitch() {

    const [isLightOn, toggleIsLightOn] = useState(false)
    const buttonText = isLightOn ? 'AAN' : 'UIT';

    function handleClick() {
        toggleIsLightOn(!isLightOn)
        console.log(buttonText);
    }

    return (
        <div className={buttonText}>
        <button
            type="button"
            value={isLightOn}
            onClick={handleClick}
            >
            {buttonText}
        </button>
            </div>

    )};

export default LightSwitch;