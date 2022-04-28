import {Schema, model} from 'mongoose';

const FAQSSchema = new Schema({
    question: {type:String, unique:true},
    response: {type:String, unique:true},
    date: {type:Date, unique:true},
    messages: [{type: Schema.Types.ObjectId, cref: 'Message'}]

})

export default model('FAQS', FAQSSchema);