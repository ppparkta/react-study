import React, { useState, useRef } from 'react';

const ResposeCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const timeOut = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === 'waiting') {
            timeOut.current.setTimeout(() => {
                setState('now');
                setMessage('지금 클릭하세요');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
            setState('ready');
            setMessage('초록색이 되면 클릭하세요');
        }
        else if (state === 'ready') {
            clearTimeout(timeOut.current);
            setState('waiting');
            setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요');
        }
        else if (state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요');
            setResult((prevResult) => { return [...prevResult, endTime.current - startTime.current]; });
        }
    }
    const onReset = () => {
        setResult([]);
    }
    const renderAverage = () => {
        return result.length === 0
            ? null
            : <>
                <div>평균시간: {result.reduce((a, c) => a + c / result.length)}ms</div>
                <button onClick={onReset}>리셋</button>
            </>
    }

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {renderAverage()}
        </>
    );
}

export default ResposeCheck;