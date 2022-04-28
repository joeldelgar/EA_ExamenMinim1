import { Message } from "./message";

export class FAQS{
    _id?: string;
    question: string;
    response: string;
    date: Date;
    messages?: Message[];

    constructor(question:string, respone:string, date:Date, messages:Message[]) {
        this.question = question;
        this.response = respone;
        this.date = date;
        this.messages = messages;
    }
}