import {BaseService} from "./baseService";
import {post,get} from"./httpclient/httpclient";
export class EventService extends BaseService{
    async GetEvents(){
       const events = await get(this._baseUrl+"/events").then((data)=>{
           console.log("eventservice",data)
            return data;
        })
        return events;
    }
}