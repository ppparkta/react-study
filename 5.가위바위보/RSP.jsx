import React, { useState, useEffect, useRef } from 'react';

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
        return v[1] === imgCoord;
    })[0];
};

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(()=>{ //componentDidMount, componentDidUpdate의 역할 (1대1 대응은 아님)
        console.log('다시 실행');
        interval.current=setInterval(changeHand,100);
        return()=>{ //componentWillUnMoount 역할
            console.log('종료');
            clearInterval(interval.current);
        }
    },[imgCoord]);

    const changeHand = () => {
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    };

    const onClickBtn = () => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            setResult('비겼습니다,');
        } else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다.');
            setScore((prev)=>prev+1);
        } else {
            setResult('졌습니다.');
            setScore((prev)=>prev-1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 2000);
    };

    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
}

//class RSP extends Component {
//    state = {
//        result: '',
//        imgCoord: rspCoords.바위,
//        score: 0,
//    };

//    interval;

//    componentDidMount() { //컴포넌트가 첫 렌더링 된 후 -> 비동기 요청을 많이 함
//        this.interval = setInterval(this.changeHand, 100);
//    }
//    componentDidUpdate() {

//    }
//    componentWillUnmount() { //컴포넌트가 제거되기 직전 -> 비동기 요청 정리를 많이 함
//        clearInterval(this.interval);
//    }

//    onClickBtn = (choice) => () => { //고차함수 사용
//const { imgCoord } = this.state;
//clearInterval(this.interval);
//const myScore = scores[choice];
//const cpuScore = scores[computerChoice(imgCoord)];
//const diff = myScore - cpuScore;
//if (diff === 0) {
//    this.setState({
//        result: '비겼습니다.',
//    });
//} else if ([-1, 2].includes(diff)) {
//    this.setState((prev) => {
//        return {
//            result: '이겼습니다.',
//            score: prev.score + 1,
//        };
//    });
//} else {
//    this.setState((prev) => {
//        return {
//            result: '졌습니다.',
//            score: prev.score - 1,
//        };
//    });
//}
//setTimeout(() => {
//    this.interval = setInterval(this.changeHand, 100);
//}, 2000);

//    };

//changeHand = () => {
//    const { imgCoord } = this.state;
//    if (imgCoord === rspCoords.바위) {
//        this.setState({
//            imgCoord: rspCoords.가위,
//        });
//    } else if (imgCoord === rspCoords.가위) {
//        this.setState({
//            imgCoord: rspCoords.보,
//        });
//    } else if (imgCoord === rspCoords.보) {
//        this.setState({
//            imgCoord: rspCoords.바위,
//        });
//    }
//};

//    render() {
//        const { result, score, imgCoord } = this.state;
//        return (
//            <>
//                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
//                <div>
//                    <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
//                    <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
//                    <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
//                </div>
//                <div>{result}</div>
//                <div>현재 {score}점</div>
//            </>
//        );
//    }
//}

export default RSP;