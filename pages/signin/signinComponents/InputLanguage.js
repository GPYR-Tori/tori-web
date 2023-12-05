import React, { useState } from 'react';
import styled from "@emotion/styled";
import SelectLanguage from "@/pages/signin/signinComponents/SelectLanguage";

const InputLanguage=()=>{
    const [language,setLanguage]=useState('');
    const handleInputLanguage=()=>{
        console.log('language : ',language);
    }

    return(
        <>
            <IPLanguage>
                {/*<p>언어</p>*/}
                <p>Language</p>
                <SelectLanguage
                    name='language'
                    id='language'
                    value={language||""}
                    onChange={(e)=>setLanguage(e.target.value)}
                    className={"inputLang"}
                />
            </IPLanguage>
        </>
    )
}

const IPLanguage=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin: 2.5rem auto 0 3rem; (기존)
  // 좌우 넓이 맞추기 해결!
  width: calc(100% - 6rem);
  margin-left: 3rem;
  margin-top: 2.5rem;

  p{
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export default InputLanguage;