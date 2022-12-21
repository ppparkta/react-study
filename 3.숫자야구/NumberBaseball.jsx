const { useState, memo } = require('react');
const React = require('react');
const Tries = require('./Tries');

const NumberBaseball=()=> {
    function getNumbers() {
        const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const array = [];
        for (let i = 0; i < 4; i += 1) {
            const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            array.push(chosen);
        }
        return array;
    };

    const [result, setResult] = useState('');
    const [tries, setTries] = useState([]);
    //useState에 함수 넣어야 하면 함수이름만 작성함. 그래야 불필요한 호출을 예방할수 있음 (lazy init)
    const [answer, setAnswer] = useState(getNumbers);
    const [value, setValue] = useState('');


    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTries((prevTries) => [...prevTries, { try: value, result: '홈런!' }]);
            alert('게임을 다시 시작합니다.');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            //열번 이상 틀렸을 때
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            }
            //10번 이내로 틀렸을 때
            else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    }
                    else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setValue('');
                setTries((prevTries) => [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼` }]);
            }
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };


    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input type="number" maxLength={4} value={value} onChange={onChangeInput} />
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Tries key={`${i + 1}차 시도: `} tryInfo={v} index={i} />
                    );
                })}
            </ul>
        </>
    );
}

module.exports = NumberBaseball;