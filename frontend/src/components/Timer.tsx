import { IoMdAlarm } from "react-icons/io";
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const TimerWrapper = styled.div`
    padding: 0 10px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.backgroundHighlight};
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
};

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: number;

        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
        setSeconds(0);
    };

    return (
        <TimerWrapper onClick={toggleTimer}>
            {!isRunning && <IoMdAlarm size={25} />}
            {isRunning && <div>{formatTime(seconds)}</div>}
        </TimerWrapper>
    );
};

export default Timer;