const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('양수빈');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        }
        else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };
    const onChangeInput = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput} />
                <button className="wordBtn">입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordRelay;