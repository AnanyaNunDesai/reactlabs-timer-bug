import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./autoReset.css"

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">Too late...</div>;
    }

    return (
        <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
        </div>
    );
};

const options = [10, 20, 30, 40, 50];

const SelectReset = ({ selectedTime, onSelectTime, onReset }) => {
    return (
        <div style={{ display: "flex" }}>
            <select value={selectedTime} onChange={(e) => onSelectTime(Number(e.target.value))}>
                {options.map((opt) => (
                    <option value={opt} key={opt}>
                        {opt + " sec"}
                    </option>
                ))}
            </select>
            <button onClick={onReset}>Reset Timer</button>
        </div>
    );
};

const TimerCountDown = () => {
    const [selectedTime, setSelectedTime] = useState(10);
    const [isTimerVisible, setIsTimerVisible] = useState(true);

    const handleSelectTime = (time) => {
        setSelectedTime(time);
    };

    const handleReset = () => {
        setIsTimerVisible(false);
        setTimeout(() => {
            setIsTimerVisible(true);
        }, 10); 
    };

    return (
        <div className="App">
            <h1>
                <a
                    href="https://www.reactlabs.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React Labs
                </a>
                <br />
                ReactJS Assignment
            </h1>
            <div className="timer-wrapper">
                {isTimerVisible && (
                    <CountdownCircleTimer
                        isPlaying
                        duration={selectedTime}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[10,6,3,0]}
                        onComplete={() => ({ shouldRepeat: true, delay: 10 })}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                )}
                <SelectReset
                    selectedTime={selectedTime}
                    onSelectTime={handleSelectTime}
                    onReset={handleReset}
                />
                <h3>I got the reset button to work!</h3>
                <h4>
                    The reset button resets as per the time selected in the dropdown.
                </h4>
            </div>
        </div>
    );
}

export default TimerCountDown

