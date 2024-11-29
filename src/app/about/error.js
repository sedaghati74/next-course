'use client'

import {useEffect} from "react";

const Error = (err) =>{
    useEffect(()=>{
        console.log(err.error);
    },[])
    return(
        <>
        <h1>error</h1>
        <button onClick={()=>{err.reset()}}>buttun</button>
        </>
    )
}

export default Error;