import {post,get} from"./httpclient/httpclient";
import {BaseService} from "./baseService"
export class BingoCardService extends BaseService{

    CreateCard(url, data){
        post(this._baseUrl+url, data);
    }

    GetCard(url) {
        return get(this._baseUrl+url)
    }

    async GetCards(){
        const cards =await get(this._baseUrl+"/cards").then((data)=>{
            console.log(data)
            console.log("request")
            return data;
        })
        return cards;
    }
}