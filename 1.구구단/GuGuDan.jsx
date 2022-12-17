const React = require('react');
const { useState, useRef } = React;
const ReactDom = require('react-dom');

const GuGuDan = () => {
    const [first, setFrist] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (event) => {
        setValue(event.target.value);
    };
    const onSubmitForm = (event) => {
        event.preventDefault();
        if (parseInt(value) === first * second) {
            setResult('정답: ' + value);
            setFrist(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        }
        else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };
    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input type="number" ref={inputRef} onChange={onChangeInput} value={value} />
                <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
}

module.exports = GuGuDan;