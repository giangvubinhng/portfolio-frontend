import axios from 'axios';


async function sendContactMeEmail(body){
	return axios.post(`${process.env.REACT_APP_API}/api/email/contact-me`, body)
}

export default {sendContactMeEmail}