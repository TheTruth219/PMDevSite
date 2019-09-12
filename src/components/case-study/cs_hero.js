import React from "react"
import styled from "styled-components"


const CSHeroBase = styled.section`
h1{
    padding:2em 1em 0 1em;
    text-align:center;

}
h3{
    max-width:800px;
    text-align:center;
    padding:0 1.3em; 
    margin-bottom:2em;
}
img{
    width:100%; 
    max-width:1200px;
    margin:auto;
    border-radius:7px;
    box-shadow: 3px 4px 38px -8px rgb(216, 216, 216);
}
.copy{
    padding-top:3em;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;  
}
.img_container{
    display:flex; 
    flex-direction:column;
    padding:3em 0 3em 0;
}


`


export default function CSHero({data}) {
    return (
        <CSHeroBase>
            <div className="copy">
                <h1>{data.Title}</h1>
                <h3>{data.Copy}</h3>
            </div>
            <div className="img_container">
                <img alt={data.Alt} src={data.Image}/>                   
            </div>
        </CSHeroBase>
    )
}
