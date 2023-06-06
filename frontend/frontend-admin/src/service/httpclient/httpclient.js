import axios from "axios";

export async function get(url){
    console.log(url)
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
        console.log(url)
        const response = await axios.post(url,data)
        console.log("httpclient "+response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}