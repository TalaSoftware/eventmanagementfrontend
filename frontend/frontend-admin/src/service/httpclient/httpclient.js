import axios from "axios";

export async function get(url){
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function post(url, data){
    try {
        const response = await axios.post(url,data)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}