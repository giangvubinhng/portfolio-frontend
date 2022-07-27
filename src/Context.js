import React, {createContext, useState, useEffect} from 'react';
import * as config from './config.json';
import axios from 'axios';

export const myContext = createContext({});
export const myBody = createContext({});
export default function Context(props) {
	const [userObject, setUserObject] = useState();
	useEffect(() => {
		axios.get(`${config.api}/getuser}`, {withCredentials: true}).then((res) => {
			if (res.data) {
				setUserObject(res.data);
			}
		})
	}, [])
	return (

		<myContext.Provider value={userObject}>{props.children}</myContext.Provider>

	)
}
