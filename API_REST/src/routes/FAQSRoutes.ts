import {Request, response, Response, Router} from 'express';
import Message from '../models/Message';
import FAQS from '../models/FAQS';

class FAQSRoutes{
    
    public router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    public async getFAQS(req: Request, res: Response) : Promise<void> { //It returns a void, but internally it's a promise.
        const allFAQS = await FAQS.find().populate('question').populate('response');
        if (allFAQS.length == 0){
            res.status(404).send("There are no FAQS yet!")
        }
        else{
            res.status(200).send(allFAQS);
        }
    }

    public async addFAQS(req: Request, res: Response) : Promise<void> {
        console.log(req.body);
        const {question, date} = req.body;
        const newFAQS = new FAQS({question, date});
        await newFAQS.save();
        res.status(200).send('Question added!');
    }

    public async updateFAQS(req: Request, res: Response) : Promise<void> {
        const fAQSToUpdate = await FAQS.findOneAndUpdate ({question: req.params.question}, req.body);
        if(fAQSToUpdate == null){
            res.status(404).send("The question doesn't exist!");
        }
        else{
            res.status(200).send('Updated!');
        }
    }

    public async deleteFAQS(req: Request, res: Response) : Promise<void> {
        const fAQSToDelete = await FAQS.findOneAndDelete ({question:req.params.question}, req.body);
        if (fAQSToDelete == null){
            res.status(404).send("The question doesn't exist!")
        }
        else{
            res.status(200).send('Deleted!');
        }
    } 

    routes() {
        this.router.get('/', this.getFAQS);
        this.router.post('/', this.addFAQS);
        this.router.put('/:question', this.updateFAQS);
        this.router.delete('/:question', this.deleteFAQS);
    }
}
const FAQSroutes = new FAQSRoutes();
export default FAQSRoutes