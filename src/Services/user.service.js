import axios from 'axios';


async function authenticate(userInfo){
    try {
		const results = await axios.post(`${process.env.REACT_APP_API}/api/user/authenticate`, userInfo, {
			withCredentials: true
		});
		return results;
	} catch (err) {
		return err.response.data
	}
}

async function register(userInfo){

    try {
		const results = await axios.post(`${process.env.REACT_APP_API}/api/user/register`, userInfo);
		return results;
	} catch (e) {
        return e.response.data

	}
}

async function fetchUser(){
    try{
	    const results = await axios.get(`${process.env.REACT_APP_API}/api/user`, {withCredentials: true})
        return results.data;
    }catch(e){
        return e.response.data;

    }
}

export default {authenticate, register, fetchUser}