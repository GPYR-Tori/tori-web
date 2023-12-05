import React, {useState} from 'react';
import styled from '@emotion/styled';
import {CategoriesIcons} from "@/src/components/categories/CategoriesIcons";
import Link from "next/link";

const CtgSelect=()=>{
    const [selectedCtg,setSelectCtg]=useState();
    // console.log(selected)

    return(
        <>
            <Container>
                    {CategoriesIcons.map(({id,name,icon})=>
                        <Link
                            href={`/?category=${id}`}
                            onClick={()=>setSelectCtg({name})}
                            className={`category-item${selectedCtg===id?"isActive":""}`}>
                            <div className={'iconBackgroundDiv'}>
                                <div className={'iconDiv'}>
                                    {icon}
                                </div>
                                <p>{name}</p>
                            </div>
                        </Link>
                    )}
            </Container>
        </>
    )
}
const Container=styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  .category-item{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    //flex-wrap: wrap;
    flex: 1 0 20%;
    //width: 20%;
    margin: 0 0 1.25rem 0;
    color: #808080;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    .iconBackgroundDiv{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #fafafa;
      &:hover{
        background-color: #009a78;
        color: white;
      }
      .iconDiv{
        display: flex;
        flex-shrink: 0;
        width: 2.5rem;
        height: 2.5rem;
        border: none;
        
      }
    }
  }
}
  .isActive{
    background-color: #009a78;
    color: white;
    p{ ${p=>p.active? `background:none;color:#009A78;`:''}
  }
`;
export default CtgSelect;