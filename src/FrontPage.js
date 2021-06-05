import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const myBody = createContext({});
export default function Context(props){
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get('https://myportfolioq.herokuapp.com/get').then((res) => {
            if(res)
            {
                setState(res.data);
            }
        });
    },[])
    return (

        <myBody.Provider value={state}>{props.children}</myBody.Provider>

    )
}