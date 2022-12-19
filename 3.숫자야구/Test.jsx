const React=require('react');
const {PureComponent, useState} =React;

 function Test(){
    const [cnt,setCnt]=useState(0);
    const onClick=()=>{
        setCnt(cnt+1);
    }
    return (
        <>
        <div>
            <button onClick={onClick}>클릭 {cnt}</button>
        </div>
        </>
    );
};
module.exports= Test;