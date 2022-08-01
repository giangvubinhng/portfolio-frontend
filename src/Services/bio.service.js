import axios from 'axios';
import sessionStorageService from './sessionStorage.service'

async function getBio(){
    try{
        const result = await axios.get(`${process.env.REACT_APP_API}/api/bio`);
        return result.data;
    }catch(e){
        return e;
    }
}

async function postBio(bio){
    try{
        const result = await axios.post(`${process.env.REACT_APP_API}/api/bio`, bio, {withCredentials: true});
        return result.data;
    }catch(e){
        return e.response.data;
    }
}

async function editBio(updatedBio){

    try{
        const result = await axios.put(`${process.env.REACT_APP_API}/api/bio`, updatedBio, {withCredentials: true});
        return result.data;
    }catch(e){
        return e.response.data;
    }

}

export default { getBio, postBio, editBio }