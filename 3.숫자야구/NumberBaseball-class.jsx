const React = require('react');
const { Component } = React;
const Tries = require('./Tries');
//import React, { Component } from 'react';

//숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

class NumberBaseballClass extends Component {
    state = {
        result: '',
        tries: [],
        answer: getNumbers(),
        value: '',
    };

    onSubmitForm = (e) => {
        const {value,tries,answer}=this.state;
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState({
                result: '홈런!',
                tries: [...tries, { try: value, result: '홈런!' }],
            });
            alert('게임을 다시 시작합니다.');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            //열번 이상 틀렸을 때
            if (tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
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
                    this.setState({
                        tries: [...tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼` }],
                        value: '',
                    });
                }
            }
        }

    };

    onChangeInput = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        const {value,tries,answer,result}=this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input type="number" maxLength={4} value={value} onChange={this.onChangeInput} />
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
}
//export const hello = 'hello'; //import {hello}
//export const bye = 'bye'; //import {bye}
//export default NumberBaseball;
//module.exports = NumberBaseball;