import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import userService from './Services/user.service';

export const appContext = createContext({});
export default function Context(props) {
	const intialUserObject = {
		displayName: '',
		email: '',
		isAdmin: false,
		isLoggedIn: false
	}
	const [userObject, setUserObject] = useState(intialUserObject);
	useEffect(() => {
		async function fetchUser(){
			const user = await userService.fetchUser();
			setUserObject(user);
		}
		fetchUser()
		
	}, [])
	return (
		<appContext.Provider value={{user: [userObject, setUserObject]}}>{props.children}</appContext.Provider>
	)
}
