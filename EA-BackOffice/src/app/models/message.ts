import { User } from "./user";
import { FAQS } from "./FAQS";
import { Activity } from "./activity";

export class Message {
    _id?: string;
    message: string;
    sendingDate?: Date;
    sender: User;
    receiver?: User;
    activity?: Activity;
    faqs?: FAQS; 

    constructor(message: string, sender: User, receiver:User, activity:Activity, faqs:FAQS) {
        this.message = message;
        this.sender = sender;
        this.receiver = receiver;
        this.activity=activity;
        this.faqs=faqs;
    }   
}
