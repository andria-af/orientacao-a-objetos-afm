import { Tweet } from "../models/Tweet";
import { User } from "../models/User";


export abstract class TweetContract {
        public id: string = ""
    constructor(
        public content: string,
        public type: string
    ){}

    reply(reply: Tweet){}
    like(from: User){}
    show(){}
    showReplies(){}
}
