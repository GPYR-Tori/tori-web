import React,{useState} from "react";
const LowComponent=(props)=>{
    const [text,setText]=useState('');
    const textChangeHandler=(e)=>{
        setText(e.currentTarget.value)
    }
    const submitText=()=>{
        props.propFunc(text)
    }

    return(
        <>
            <input
                value={text}
                onChange={textChangeHandler} />
            <button
                type={"button"}
                onClick={submitText}>확인</button>
        </>
    )
};

export default LowComponent;