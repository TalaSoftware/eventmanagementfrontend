import {post,get} from"./httpclient/httpclient";
import {BaseService} from "./baseService"
export class BingoCardService extends BaseService{

    async CreateCard(url, data){
        post(this._baseUrl+url, data);
    }

    GetCard(url) {
        return get(this._baseUrl+url)
    }

    async GetCards(){
        const cards =await get(this._baseUrl+"/event/1/bingocards").then((data)=>{
            console.log(data)
            console.log("request")
            return data;
        })
        return cards;
    }

    async GetById( id){
        const bingocard = await get(this._baseUrl+"/bingocards/"+id+"").then((data)=>{
            console.log("BingocardService getby id",data)
            return data;
        })
        return bingocard;
    }
}