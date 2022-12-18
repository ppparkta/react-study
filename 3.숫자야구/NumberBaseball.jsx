const React = require('react');
const { Component } = React;
//import React, { Component } from 'react';

//숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers() {

};

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {
        this.setState({ value: this.state.value });
    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {[
                        { fruit: 'apple', taste: 'good' },
                        { fruit: 'banana', taste: 'um...' },
                        { fruit: 'grape', taste: 'bad' },
                        { fruit: 'dohoon', taste: 'lol' },
                        { fruit: 'soobin', taste: 'looool' },
                    ].map((v,i) => {
                        return (
                            <li key={v.fruit + v.taste}>[{i}] <strong>{v.fruit}</strong> is {v.taste}</li>
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
module.exports = NumberBaseball;